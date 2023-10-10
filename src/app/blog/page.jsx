"use client"

import CardList from "@/components/CardList/index";
import styles from "./styles.module.css";
import Menu from "@/components/Menu/index";

const BlogPage = () => {
  // const page = parseInt(searchParams.page) || 1;
  // const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;