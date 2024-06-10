'use client';

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "../../write/toolbar";
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
import styles from "../../write/styles.module.css";
import { format } from 'date-fns';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false
});

function EditPage({ params }) {
  const { slug } = params;
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://namemoria.vercel.app/api/posts/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setTitle(data.title);
          setValue(data.desc);
          setMedia(data.img);
          setCatSlug(data.catSlug);
          setCreatedAt(data.createdAt);
          setUpdatedAt(data.updatedAt);
        } else {
          console.error("Failed to load post data");
        }
      } catch (error) {
        console.error("Failed to fetch post data:", error);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      if (!file) return;
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
        (error) => {
          console.error("Upload failed:", error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    upload();
  }, [file]);

  const handleSubmit = async () => {
    try {
      const res = await fetch(`https://namemoria.vercel.app/api/posts/${slug}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          desc: value,
          img: media,
          catSlug: catSlug || "inexiste",
        }),
      });

      if (res.ok) {
        router.push(`/posts/${slug}`);
      } else {
        console.error("Failed to update post");
      }
    } catch (error) {
      console.error("Failed to update post:", error);
    }
  };

  if (status === "loading") {
    return <div className={styles.loading}>Carregando...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
    return null;
  }


  return (
    <div className={styles.container}>
      <input
        type="text"
        value={title}
        placeholder="Título"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.category}>
        <select
          className={styles.select}
          value={catSlug}
          onChange={(e) => setCatSlug(e.target.value)}
        >
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
        Atualizar
      </button>
    </div>
  );
}

export default EditPage;