import React from "react";
import styles from "./styles.module.css";
import Card from "../Card/index";

const getData = async () => {
  const res = await fetch(
    "https://namemoria.vercel.app/api/posts",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  const data = await res.json();

  // Reverta a ordem dos posts
  const reversedPosts = data.posts.reverse();

  return { ...data, posts: reversedPosts };
};

const CardList = async () => {
  const { posts } = await getData();

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
