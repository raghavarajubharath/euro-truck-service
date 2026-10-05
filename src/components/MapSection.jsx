import mapImg from "../assets/map.png";
import "./MapSection.css";

function MapSection() {
  return (
    <section className="map-section">
      <div className="map-section__text">
        <div className="map-section__text-inner">
          <h2>Где мы?</h2>
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
      </div>

      <img src={mapImg} alt="Map showing our location in Zurich" className="map-section__image" />
    </section>
  );
}

export default MapSection;
