import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../AuthLinks/index";
import ThemeToggle from "../ThemeToggle/index";
import {BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs"
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href="https://www.facebook.com"><BsFacebook/></Link>
        <Link href="https://instagram.com/"><BsInstagram/></Link>
        <Link href="https://youtube.com"><BsYoutube/></Link>
      </div>
      <div className={styles.logo}>the blog.</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Início</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;