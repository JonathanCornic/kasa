import './AuthorCard.css'

const AuthorCard = ({ picture, name }) => {
    return (
      <figure className='author-card-container'>
        <img src={picture} alt="Author" />
        <figcaption>{name}</figcaption>
      </figure>
    );
  };
  
  export default AuthorCard;
