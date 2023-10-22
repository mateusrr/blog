import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Featured = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
      {/* Vamos explorar o mundo. <br/> */}
      Compartilhe suas experiências!
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/booking.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>A curiosidade é o combustível
          para o crescimento pessoal.</h1>
          <p className={styles.postDesc}>
          Se você compartilha nossa
          paixão pela exploração intelectual e está <br/>em busca de inspiração, conhecimento
          e diversão, este blog é o seu <br/>destino.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;