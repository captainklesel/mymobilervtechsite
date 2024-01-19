import styles from '@/styles/Header.module.css'
import Image from 'next/image'
import Logo from '@/public/logo-transparent.png'
import Image1 from '@/public/NRVTA-Logo.jpg'
import Image2 from '@/public/rvtaa-logo.png'

export default function Header() {

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
                <div className={styles.iconsSection}>
                    <div className={styles.icons}>
                        <div className={styles.image1}>
                            <Image 
                                id={styles.image1} 
                                src={Image1} 
                                alt="NRVTA Logo"
                            />
                        </div>
                        <div className={styles.logo}>
                            <Image 
                                id={styles.logo} 
                                src={Logo} 
                                alt="My Mobile RV Tech Logo"
                            />
                        </div>
                        <div className={styles.image2}>
                            <Image 
                                id={styles.image2} 
                                src={Image2} 
                                alt="RVTAA Logo" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </container>
        </>
    )
}