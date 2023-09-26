import React from "react";
import styles from './styles.module.css'
import Pagination from "../Pagination";
import Image from "next/image";
import Card from "../Card";

const CardList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent posts</h1>
            <div className={styles.posts}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    )
}

export default CardList