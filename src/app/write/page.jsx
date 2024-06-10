'use client';

import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./toolbar"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
import styles from "./styles.module.css";

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false
});

function WritePage () {
  const { status } = useSession();
  const router = useRouter();

  // const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className={styles.loading}>Carregando...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("https://namemoria.vercel.app/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "inexiste",
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Título"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.category}>
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="gastronomia">Gastronomia</option>
        <option value="viagem">Viagem</option>
        <option value="esporte">Esporte</option>
        <option value="curiosidades">Curiosidades</option>
        <option value="leitura">Leitura</option>
        <option value="musica">Música</option>
      </select>
            <input
              className={styles.addButton}
              type="file"
              id="image"
              htmlFor="image"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label for="image" className={styles.customButton}>Escolher imagem</label>
            <input 
              className={styles.addButton}
              type="file"
              id="image"
              htmlFor="image"
              // name="file"
              onChange={(e) => setFile(e.target.files[0])} />
          
      </div>
      <div className={styles.editor}>        
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Digite..."
        modules={modules}
        formats={formats}
      />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publicar
      </button>
    </div>
  );
};

export default WritePage;