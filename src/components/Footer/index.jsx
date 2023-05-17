import logo from '../../assets/logo-blanc.png'
import './index.css'

function Footer() {
    return (
        <div className="footer-container">
            <img
                src={logo}
                alt="logo en forme de maison"
                className="kasa-logo-blanc"
            />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}
export default Footer
