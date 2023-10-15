import styles from "./styles.module.css";
import Image from "next/image";
import Comments from "@/components/Comments/index";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}?popular=true`, {
      cache: "no-store",
  })

  if(!res.ok) {
      throw new Error("failed")
  }

  return res.json()
}

const SinglePage = async ({params}) => {
  const {slug} = params
  const data = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            {data?.title}
          </h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{data?.createdAt}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
             <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            // dangerouslySetInnerHTML={{__html:data?.asc || ''}}
          >
          <p>{data.desc}</p>
          </div>
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;