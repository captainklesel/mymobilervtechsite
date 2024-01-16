export default function Card({ title, description, price}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description} - {price}</p>
        </div>
    )
}