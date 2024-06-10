"use client"

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Featured = () => {
  const { status } = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Compartilhe suas memórias!</h1>
          <p className={styles.postDesc}>
          Junte-se a nós para eternizar momentos
          especiais e conectar-se com outras pessoas que compartilham vivências similares.
          </p>
          <div className={styles.log}>
          <>
            {status === "unauthenticated" ? (
            <>
            <button className={styles.login}>
              <Link href="/login">Faça login</Link>
            </button>
            <p>e comece a publicar.</p>
            </>
            ) : (
            <>
              <Link href="/write" className={styles.link}>
                Comece a publicar
              </Link>
            </>
            )}
          </>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/people1.png" alt="" fill className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Featured;