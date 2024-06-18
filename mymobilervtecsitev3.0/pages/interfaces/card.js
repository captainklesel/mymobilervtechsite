import styles from '@/styles/Card.module.css'

export default function Card({ type, data}) {
    switch (type) {
       case "home": return homeCard(data)
       case "services": return servicesCard(data)
       case "contact": return contactCard(data)
       case "about": return aboutCard(data)
    }
}

function homeCard(data) {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.title}>
                <h2>{data.h1}</h2>
            </div>
            <hr className={styles.line}/>
            <div className={styles.subtitle}>
                <h3>{data.h2}</h3>
            </div>
            <div className={styles.body}>
                <p>{data.body}</p>
            </div>
            <div className={styles.body2}>
                <p>{data.body2}</p>
            </div>
        </div>
        </>
    )
}

function servicesCard(data) {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.title}>
                <h2>{data.h1}</h2>
            </div>
            <hr className={styles.line}/>
            <div className={styles.subtitle}>
                <h3>{data.h2}</h3>
            </div>
            <div className={styles.body}>
                <p>{data.body}</p>
            </div>
            <div className={styles.body2}>
                <p>{data.body2}</p>
            </div>
        </div>
        </>
    )
}

function contactCard(data) {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.title}>
                <h2>{data.h1}</h2>
            </div>
            <hr className={styles.line}/>
            <div className={styles.address}>
                <p><strong>Address: </strong></p><p>{data.address}</p>
            </div>
            <div className={styles.email}>
                <p><strong>Email:</strong> <span><a href={`mailto:{data.email}`}>{data.email}</a></span></p>
            </div>
            <div className={styles.phone}>
                <p>
                    <strong>Phone: </strong>
                    <a href={`tel:+1{data.phone}`}>{data.phone}</a>
                </p>
            </div>
        </div>
        </>
    )
}

function aboutCard(data) {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.title}>
                <h2>{data.h1}</h2>
            </div>
            <hr className={styles.line}/>
            <div className={styles.subtitle}>
                <h3>{data.h2}</h3>
            </div>
            <div className={styles.body}>
                <p>{data.body}</p>
            </div>
            <div className={styles.body2}>
                <p>{data.body2}</p>
            </div>
            <div className={styles.cardImage}>
                <img src={data.image} alt={data.imageAlt} />
            </div>
        </div>
        </>
    )
}