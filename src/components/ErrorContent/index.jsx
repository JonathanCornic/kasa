import { Link } from 'react-router-dom'
import './ErrorContent.css'

const ErrorContent = () => {
    return (
        <div className="error-container">
            <h1 className="error-404">404</h1>
            <p className="error-txt">
                <span>Oups, La page que</span>{' '}
                <span>vous demandez n'existe pas.</span>
            </p>
            <Link to="/" className="error-redirection">
                Retournez sur la page d'accueil
            </Link>
        </div>
    )
}

export default ErrorContent
