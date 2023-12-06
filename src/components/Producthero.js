import React from "react";

function ProductHero(props) {
  return (
    <section className="hero">
      <img src={props.imgSrc} alt="Hero" className="hero--photo" />
      <h1 className="hero--header">{props.headline}</h1>
      <p className="hero--page">{props.content}</p>
    </section>
  );
}

export default ProductHero;
