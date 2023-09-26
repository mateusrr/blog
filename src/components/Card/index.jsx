import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <h1>Lorem ipsum dolor</h1>
                <p>lorem ipsum dolor</p>
                <Link href="/">Read more</Link>
            </div>
        </div>
    )
}

export default Card