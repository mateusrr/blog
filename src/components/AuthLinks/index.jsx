"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();
    // const status = "noauthenticated"

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.login}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Publicar
          </Link>
          <Link href="/myposts" className={styles.link}>
            Minhas publicações
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Início</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Publicar</Link>
              <Link href="/myposts">
                Minhas publicações
              </Link>
              <span onClick={signOut}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
