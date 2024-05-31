"use client"

import React, { useEffect, useState } from "react";
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
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const reversedPosts = data.posts.reverse();

  return { ...data, posts: reversedPosts };
};

const CardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { posts } = await getData();
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
