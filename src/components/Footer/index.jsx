import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>Lamablog</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={styles.icons}>
          <Link href="https://www.facebook.com"><Image src="/facebook.png" alt="facebook" width={20} height={20} /></Link>
          <Link href="https://instagram.com/"><Image src="/instagram.png" alt="instagram" width={20} height={20} /></Link>
          <Link href="https://tiktok.com"><Image src="/tiktok.png" alt="tiktok" width={20} height={20} /></Link>
          <Link href="https://youtube.com"><Image src="/youtube.png" alt="youtube" width={20} height={20} /></Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Início</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Sobre</Link>
          <Link href="/">Contato</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Estilo</Link>
          <Link href="/">Moda</Link>
          <Link href="/">Códigos</Link>
          <Link href="/">Viagem</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;