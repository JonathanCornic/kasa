import './Carrousel.css'

const Carrousel = ({ pictures }) => {
    return (
        <div className="carrousel-container">
            <img src={pictures[0]} alt="" />
        </div>
    )
}
export default Carrousel
