"use client"
import React, { useEffect, useState } from "react";
import styles from './styles.module.css'
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
    try {
        const res = await fetch("https://namemoria.vercel.app/api/categories", {
            cache: "no-store",
        })
    
        if(!res.ok) {
            throw new Error("failed")
        }
    
        return res.json()
        
    } catch (error) {
        console.error("error: ", error)
        return null
    }
}

const CategoryList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                console.log("Data from API:", result); // Log dos dados retornados pela API
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, []);

    // Verifica se data é uma matriz antes de mapeá-la
    if (!Array.isArray(data)) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Categorias</h1>
            <div className={styles.categories}>
                {data?.map((item) => (
                    <Link 
                        href={`/blog?cat=${item.slug}`}
                        className={`${styles.category} ${styles[item.slug]}`}
                        key={item._id}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
            <h1 className={styles.title}>Publicações</h1>
        </div>
    );
}

export default CategoryList;
