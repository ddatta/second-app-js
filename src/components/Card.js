function Card(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} alt={props.title} />

      <h3>{props.title}</h3>
      <h4>{props.price}</h4>
    </div>
  );
}

export default Card;
