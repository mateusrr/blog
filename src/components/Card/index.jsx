import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'
import { format } from 'date-fns'

const Card = ({key, item}) => {
    return (
        <div className={styles.container} key={key}>
            {item.img && (
                <div className={styles.imageContainer}>
                    <Image src={item.img} alt="" fill className={styles.image} />
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item ? format(new Date(item.createdAt), 'dd/MM/yyyy') : ''} • </span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}>{item.desc.substring(3, 100)}...</p>
                <Link href={`/posts/${item.slug}`} className={styles.link}>Leia mais</Link>
            </div>
        </div>
    )
}

export default Card