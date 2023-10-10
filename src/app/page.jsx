import styles from "./homepage.module.css";
import Featured from "@/components/Featured/index";
import CategoryList from "@/components/CategoryList/index";
import CardList from "@/components/CardList/index";
import Menu from "@/components/Menu/index";

export default function Home() {
  // const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}