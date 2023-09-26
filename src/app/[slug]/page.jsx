import Menu from "@/components/Menu/index";
import styles from "./styles.module.css";
import Image from "next/image";
import Comments from "@/components/Comments/index";

const SinglePage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>lorem ipsum dolor itc eodks</h1>
          <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
              </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>math rock</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                porro sequi, totam minima consequuntur, aspernatur deleniti vero
                repellendus dorales.
                </p>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                porro sequi, totam minima consequuntur, aspernatur deleniti vero
                repellendus dorales.
                </p>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                porro sequi, totam minima consequuntur, aspernatur deleniti vero
                repellendus dorales.
                </p>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                porro sequi, totam minima consequuntur, aspernatur deleniti vero
                repellendus dorales.
                </p>
            </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;