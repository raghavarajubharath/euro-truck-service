import partsImg from "../assets/service-parts.png";
import washImg from "../assets/service-wash.png";
import audioImg from "../assets/service-audio.png";
import oilImg from "../assets/service-oil.png";
import "./Services.css";

const services = [
  {
    title: "Б/у запчасти для грузовых авто из Европы",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: partsImg,
  },
  {
    title: "Автомойка грузовых и легковых авто",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: washImg,
  },
  {
    title: "Магазин аксессуаров",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: audioImg,
  },
  {
    title: "Пункт замены масла легковых авто",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: oilImg,
  },
];

function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Любые услуги за ваши денишки</h2>
        <p className="section-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
          in et, lectus sit lorem id integer.
        </p>

        <div className="services__grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <div className="service-card__text">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <img src={service.image} alt={service.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
