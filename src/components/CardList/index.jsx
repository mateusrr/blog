"use client"
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Pagination from "../Pagination/index";
import Image from "next/image";
import Card from "../Card/index";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = ({ page, cat }) => {
  const [allPosts, setAllPosts] = useState([]);
  const POST_PER_PAGE = 2;

  useEffect(() => {
    async function fetchData() {
      try {
        // Busque os posts de todas as páginas disponíveis
        const allPostsData = [];
        let currentPage = 1;

        while (true) {
          const { posts, count } = await getData(currentPage, cat);
          if (posts.length === 0) {
            break; // Não há mais posts disponíveis
          }
          allPostsData.push(...posts);
          currentPage++;
        }

        // Ordene todos os posts por data de criação em ordem decrescente
        const sortedPosts = allPostsData.sort((a, b) => {
          const dateA = new Date(a.createdAt).getTime();
          const dateB = new Date(b.createdAt).getTime();
          return dateB - dateA;
        });

        setAllPosts(sortedPosts);
      } catch (error) {
        console.error("Erro ao buscar os posts", error);
      }
    }
    fetchData();
  }, [cat]);

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < allPosts.length;

  // Calcule a faixa de posts a serem exibidos na página atual
  const start = POST_PER_PAGE * (page - 1);
  const end = start + POST_PER_PAGE;
  const postsToDisplay = allPosts.slice(start, end);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div>
        {postsToDisplay?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
