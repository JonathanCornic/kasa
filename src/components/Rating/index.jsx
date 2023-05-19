import './Rating.css'
import starGrey from '../../assets/star-grey.svg'
import starRed from '../../assets/star-red.svg'

const Rating = ({ rating }) => {
    const maxRating = 5 // Nombre maximal d'étoiles

    const getStarImage = (index) => {
        if (index < rating) {
            return starRed // Étoile rouge pour les notes supérieures à l'index actuel
        }
        return starGrey // Étoile grise pour les notes inférieures ou égales à l'index actuel
    }

    return (
        <div className="rating-container">
            <ul>
                {Array.from({ length: maxRating }, (_, index) => (
                    <li key={index}>
                        <img src={getStarImage(index)} alt="Star" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Rating
