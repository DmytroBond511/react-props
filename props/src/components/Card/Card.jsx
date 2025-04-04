import "./Card.css";

const Card = ({ title, description, image }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={handleClick}>Дізнатися більше</button>
      </div>
    </div>
  );
};
export default Card;