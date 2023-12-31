import React from "react";
import styles from './styles.module.css'
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
    const res = await fetch("https://namemoria.vercel.app/api/categories", {
        cache: "no-store",
    })

    if(!res.ok) {
        throw new Error("failed")
    }

    return res.json()
}

const CategoryList = async () => {
    const data = await getData()

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
                        {/* {item.img && (
                            <Image 
                            src={item.img} 
                            alt="" 
                            width={32} 
                            height={32}
                            className={styles.image}
                        />
                        )} */}
                        {item.title}
                    </Link>
                    ))}
            </div>

            <h1 className={styles.title}>Publicações</h1>
        </div>
    )
}

export default CategoryList