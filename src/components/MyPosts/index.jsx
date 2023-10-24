"use client"
import styles from './styles.module.css';
import CardMyPosts from './cardMyPosts';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

const MyPosts = () => {
  const { data: session } = useSession(); // Obtém informações de sessão do usuário logado

  // Estado para armazenar os posts do usuário
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user) {
      // Substitua a URL abaixo pela rota de API 'posts' que lista todos os posts
      fetch("https://namemoria.vercel.app/api/posts", {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          // Filtra os posts do usuário logado com base no email
          const userPostsData = data.posts.filter(
            (item) => item.userEmail === session.user.email
          );
          setUserPosts(userPostsData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Erro ao buscar os posts:', error);
          setLoading(false);
        });
    }
  }, [session]);

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {loading ? (
          <div>Verificando...</div>
        ) : userPosts.length > 0 ? (
          userPosts.map((item) => (
            <CardMyPosts item={item} key={item._id} />
          ))
        ) : (
          <div className={styles.msg}>
            <Image src="/nopublish.svg" width={700} height={700} alt='' />
            <h1>Você não possui publicações! 😔</h1>
            <p>
              <Link href="/write" className={styles.link}>
                Clique aqui</Link> para começar a publicar.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPosts;
