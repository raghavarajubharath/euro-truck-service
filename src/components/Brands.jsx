import scania from "../assets/logo-scania.png";
import volvo from "../assets/logo-volvo.png";
import man from "../assets/logo-man.png";
import daf from "../assets/logo-daf.png";
import renault from "../assets/logo-renault.png";
import "./Brands.css";

const logos = [scania, volvo, man, daf, renault];

function Brands() {
  return (
    <section className="brands">
      <div className="container brands__inner">
        <div className="brands__text">
          <h2>У вас вопрос кто мы а кто мы блин</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            odio in et, lectus sit lorem id integer.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            odio in et, lectus sit lorem id integer.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            odio in et, lectus sit lorem id integer.
          </p>
        </div>

        <div className="brands__logos">
          {logos.map((logo, index) => (
            <div className="brands__logo-box" key={index}>
              <img src={logo} alt="Truck brand" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
