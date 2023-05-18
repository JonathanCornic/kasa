import './Collapse.css'
import Vector from '../../assets/Vector.svg'

const Collapse = ({title, description}) => {
    return (
        <div className="collapse-container">
            <div className='collapse-banner'>
                <div className="collapse-title">{title}</div>
                <img src={Vector} alt="" className="collapse-vector" />
            </div>
            <div className="collapse-description">{description}</div>
        </div>
    )
}
export default Collapse
