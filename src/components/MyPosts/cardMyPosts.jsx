
import styles from './styles.module.css'
import Link from 'next/link'
import { format } from 'date-fns'

const CardMyPosts = ({ item }) => {
    // const userEmail = 'mateusrocha.developer@gmail.com'

    // if(item.userEmail !== userEmail) {
    //     return null;
    // }

    return (
        <div className={styles.containerCard}>
            <span className={styles.date}>
                {item ? format(new Date(item.createdAt), 'dd/MM/yyyy') : ''} • 
            </span>
            <Link href={`/posts/${item.slug}`}>
                {item.title}
            </Link>
        </div>
    );
}



export default CardMyPosts;
