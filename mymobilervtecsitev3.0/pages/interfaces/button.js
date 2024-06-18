import styles from '@/styles/Button.module.css'

export default function Button(props) { // props: body, link
    const body = props.body
    const href = props.href
    const handleClick = () => {
        window.open(href, "_blank")
    }

    return (
        <>
        <div className={styles.button} onClick={(e) => {handleClick(e)}}>{body}</div>
        </>
    )
}