import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo-rouge.svg'
import './Navbar.css'

const Navbar = () => {
    const location = useLocation()
    return (
        <nav>
            <img
                src={Logo}
                alt="logo en forme de maison"
                className="kasa-logo-rouge"
            />

            <ul>
                <li>
                    <Link
                        to="/"
                        className={location.pathname === '/' ? 'active' : ''}
                    >
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className={
                            location.pathname === '/about' ? 'active' : ''
                        }
                    >
                        Á propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
