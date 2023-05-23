import './AuthorCard.css'

const AuthorCard = ({ picture, name }) => {
    return (
      <>
        <img src={picture} alt="Author" />
        <figcaption>{name}</figcaption>
      </>
    );
  };
  
  export default AuthorCard;
