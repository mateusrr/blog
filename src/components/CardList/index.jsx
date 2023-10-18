import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Pagination from "../Pagination/index";
import Card from "../Card/index";

const getData = async (page, cat) => {
  const res = await fetch(
    `https://the-blog-lake.vercel.app/api/posts?page=${page}&cat=${cat || ""}`,
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
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const allPostsData = [];
      let currentPage = 1;
      let totalPosts = 0;

      while (true) {
        const { posts, count } = await getData(currentPage, cat);
        totalPosts = count;

        if (posts.length === 0) {
          break;
        }

        allPostsData.push(...posts);
        currentPage++;
      }

      setAllPosts(allPostsData);
      setCount(totalPosts);
    };

    fetchAllPosts();
  }, [cat]);

  const POST_PER_PAGE = 2;
  const startIndex = POST_PER_PAGE * (page - 1);
  const endIndex = startIndex + POST_PER_PAGE;
  const pagedPosts = allPosts.slice(startIndex, endIndex);

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = endIndex < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {pagedPosts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
