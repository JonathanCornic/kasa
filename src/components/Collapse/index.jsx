import './Collapse.css'
import Vector from '../../assets/Vector.svg'
import { useState } from 'react'

const Collapse = ({ title, description }) => {
    const [toggle, setToggle] = useState(false)

    function ToggleCollapse() {
        setToggle(!toggle)
    }

    return (
        <div className="collapse-container">
            <div className="collapse-banner">
                <div className="collapse-title">{title}</div>
                <img
                    src={Vector}
                    alt=""
                    className={`collapse-vector ${toggle ? 'collapsed' : ''}`}
                    onClick={ToggleCollapse}
                />
            </div>
            {!toggle && (
                <div
                    className={`collapse-description ${toggle ? 'collapsed' : ''}`}
                >
                    {description}
                </div>
            )}
        </div>
    )
}
export default Collapse
