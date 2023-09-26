import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../MenuPosts/index";
import MenuCategories from "../MenuCategories/index";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
    // <div className={styles.container}>
    //   <h2 className={styles.subtitle}>{"What's hot"}</h2>
    //   <h1 className={styles.title}>Most Popular</h1>
    //   <div className={styles.items}>
    //     <Link href="/" className={styles.item}>
    //       <div className={styles.imageContainer}>
    //         <Image src="/p1.jpeg" alt="" fill className={styles.image} />
    //       </div>
    //       <div className={styles.textContainer}>
    //         <span className={`${styles.category} ${styles.travel}`}>Travel</span>
    //         <h3>lorem ipsum</h3>
    //         <div className={styles.detail}>
    //           <span className={styles.username}>math rock</span>
    //           <span className={styles.date}>11.03.2023</span>
    //         </div>
    //       </div>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Menu;