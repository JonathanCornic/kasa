import { useNavigate } from 'react-router-dom'
import './Card.css'

const Card = ({ id, cover, title }) => {
    const navigate = useNavigate()
    const handleImageClick = () => {
        navigate(`/logement/${id}`)
    }
    return (
        <li className="card" onClick={handleImageClick}>
            <div className="image-container">
                <img src={cover} alt="" />
            </div>
            <div className="title-container">
                <h2>{title}</h2>
            </div>
        </li>
    )
}

export default Card
