import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.text}>
          <p>
            ©️ MRR, 2023. Direitos reservados.
          </p>
          <p>Contato: namemoriaapp@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;