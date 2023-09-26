import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../AuthLinks/index";
import ThemeToggle from "../ThemeToggle/index";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://www.facebook.com"><Image src="/facebook.png" alt="facebook" width={24} height={24} /></Link>
        <Link href="https://instagram.com/"><Image src="/instagram.png" alt="instagram" width={24} height={24} /></Link>
        <Link href="https://tiktok.com"><Image src="/tiktok.png" alt="tiktok" width={24} height={24} /></Link>
        <Link href="https://youtube.com"><Image src="/youtube.png" alt="youtube" width={24} height={24} /></Link>
      </div>
      <div className={styles.logo}>the blog.</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Início</Link>
        <Link href="/contact" className={styles.link}>Contato</Link>
        <Link href="/about" className={styles.link}>Sobre</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;