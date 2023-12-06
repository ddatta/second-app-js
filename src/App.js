import Navbar from "./components/Navbar.js";
import ProductHero from "./components/Producthero.js";
import Card from "./components/Card.js";
import cardData from "./model/data.js";

function App() {
  const cardElements = cardData.map((cardItem) => {
    return (
      <Card
        imgSrc={cardItem.imgSrc}
        title={cardItem.title}
        price={cardItem.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <ProductHero
        imgSrc="./images/hero_image.png"
        headline="Online Experiences"
        content="Join unique interactive activities led by one of a kind hosts all without leaving home"
      />
      <div className="card--layout">{cardElements}</div>
    </div>
  );
}

export default App;
