import './Collapse.css'
import chevron from '../../assets/chevron.svg'
import { useState } from 'react'

const Collapse = ({ title, description }) => {
    const [toggle, setToggle] = useState(true)

    function ToggleCollapse() {
        setToggle(!toggle)
    }

    return (
        <div className="collapse-container">
            <div className="collapse-banner" onClick={ToggleCollapse}>
                <div className="collapse-title">{title}</div>
                <img
                    src={chevron}
                    alt=""
                    className={`collapse-chevron ${toggle ? 'collapsed' : ''}`}
                />
            </div>
            {!toggle && (
                <div
                    className={`collapse-description ${
                        toggle ? 'collapsed' : ''
                    }`}
                >
                    {description}
                </div>
            )}
        </div>
    )
}
export default Collapse
