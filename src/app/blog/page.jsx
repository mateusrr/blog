import CardList from "@/components/CardList/index";
import styles from "./styles.module.css";
import Menu from "@/components/Menu/index";

const BlogPage = ({ searchParams }) => {
  // const page = parseInt(searchParams.page) || 1;
  // const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;