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
      <div className={styles.logo}>
        <Link href="/">
          na memória<span className={styles.ponto}>.</span>
        </Link>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Início</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;