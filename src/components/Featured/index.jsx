import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = async () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
      {/* Vamos explorar o mundo. <br/> */}
      Compartilhe suas memórias!
      </h1>
      <div className={styles.post}>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Conecte-se com histórias
          inspiradoras <br/>e emocionantes em nossa comunidade.</h1>
          {/* <p className={styles.postDesc}>
          Que cada história, seja inspiradora, engraçada, emocionante
          e valorizada, criando uma comunidade de conexão e inspiração
          <br/>por meio das experiências de vida. <br/>Junte-se a nós para eternizar momentos
          especiais e conectar-se <br/>com outras pessoas que compartilham vivências similares.
          </p> */}
          <div className={styles.log}>
            <button className={styles.login}>
              <Link href="/login">Faça login</Link>
            </button>
            <p>e comece a publicar.</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/booking.jpg" alt="" fill className={styles.image} />
        </div>
      </div>
    </div>
  );w
};

export default Featured;