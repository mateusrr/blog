import CardList from "@/components/CardList/index";
import styles from "./styles.module.css";
import Card from "@/components/Card";

const getData = async (cat) => {
  const res = await fetch(`http://localhost:3000/api/posts?cat=${cat}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};

const BlogPage = async ({ searchParams }) => {
  const { cat } = searchParams;

  try {
    const { posts } = await getData(cat);

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{cat}</h1>
        <div className={styles.content}>
          {posts?.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    // Lidar com erros ou exibir uma mensagem de erro na interface do usuário.
    return <div>Erro ao carregar os posts.</div>;
  }
};

export default BlogPage;
