
import styles from './styles.module.css'
import Link from 'next/link'
import { format } from 'date-fns'

const CardMyPosts = ({ item }) => {
    return (
        <div className={styles.containerCard}>
            <span className={styles.date}>
                {item ? format(new Date(item.createdAt), 'dd/MM/yyyy') : ''} • 
            </span>
            <Link href={`/posts/${item.slug}`}>
                {item.title}
            </Link>

            <Link href={`/edit/${item.slug}`} className={styles.link}>Editar</Link>
        </div>
    );
}



export default CardMyPosts;
