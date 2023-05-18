import { Link } from 'react-router-dom'
import './ErrorContent.css'

const ErrorContent = () => {
    return (
        <>
            <div className="error-404">404</div>
            <p className="error-txt">
                Oups, La page que vous demandez n'existe pas.
            </p>
            <Link to="/" className="error-redirection">
                Retournez sur la page d'accueil
            </Link>
        </>
    )
}

export default ErrorContent
