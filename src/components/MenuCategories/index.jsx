import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Estilo
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Moda
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Comida
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Viagem
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        Cultura
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Código
      </Link>
    </div>
  );
};

export default MenuCategories;