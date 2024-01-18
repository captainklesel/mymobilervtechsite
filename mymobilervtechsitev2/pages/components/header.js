import styles from '@/styles/Header.module.css'

export default function Header() {
    // let backgroundImagePath = ''
    let image1Path = 'https://nrvta.com/wp-content/uploads/2020/11/NRVTA-Logo-600.jpg'
    let image2Path = '/logo.png'
    let image3Path = 'https://rvtaa.org/wp-content/uploads/2020/12/rvtaa-logo-sm.png'

    return (
        <>
        <container>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h1 id={styles.title}>My Mobile RV Tech</h1>
                </div>
                <div className={styles.subtitle}>
                    <h2 id={styles.subtitle}>Experienced. Knowledgeable. Quality Service.</h2>
                </div>
                <div className={styles.icons}>
                    <img id={styles.image1} src={image1Path} alt="image1"/>
                    <img id={styles.image2} src={image2Path} alt="image2" />
                    <img id={styles.image3} src={image3Path} alt="image3" />
                </div>
            </div>
        </container>
        </>
    )
}