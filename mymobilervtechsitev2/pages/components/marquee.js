import Content from '@/public/reviews.json'
import styles from '@/styles/Marquee.module.css'
import Button from '@/pages/interfaces/button.js'
import Reviews from '@/public/reviews.json'

export default function Marquee() {
    return (
        <>
        <div className={styles.wrapper}>
            <div className={styles.button}><Button body="Leave a review" href="https://wwww.google.com" /></div>
            <p className={styles.marqueeLabel}><strong>What our customers say: </strong></p>
            <div className={styles.marqueeBorder}>
                <div className={styles.marqueeOne}>{renderReviews()}</div>
                <div className={styles.marqueeTwo}>{renderReviews()}</div>
            </div>
        </div>  
        </>
    )
}

function renderReviews() {
    return Reviews.map((review) => {
        return (` ${review.name}: ${renderRating(review.rating)}(5 stars!), "${review.body}" •••`)
    })
}

function renderRating(rating) {
    let stars = ``;
    for (let i = 0; i < rating; i++) {
        stars += '⭐';
    }
    return stars;
}

function renderStar() {
    return (`
        <svg className={${styles.star}} width="20px" height="20px" viewBox="0 0 24 24">
            <path fill="#FFD700" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    `)
}