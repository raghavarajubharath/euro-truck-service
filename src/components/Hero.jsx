import trucks from "../assets/hero-trucks.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1>Affordable truck service</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            odio in et, lectus sit lorem id integer.
          </p>
          <button className="btn-primary">Чета сделать</button>
        </div>

        <img src={trucks} alt="Truck fleet" className="hero__image" />
      </div>
    </section>
  );
}

export default Hero;
