
import styles from '@/styles/Card.module.css'

export default function Card({ title, subtitle, body1, body2 }) {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <hr className={styles.line}/>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.body1}>{body1}</div>
            <div className={styles.body2}>{body2}</div>
        </div>
        </>
    )
}
