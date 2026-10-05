import { useState } from "react";
import photo from "../assets/gallery-1.png";
import "./Gallery.css";

const slides = [photo, photo, photo, photo];

function Gallery() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">Фоточки</h2>

        <div className="gallery__frame">
          <img src={slides[activeSlide]} alt={`Slide ${activeSlide + 1}`} />
        </div>

        <div className="gallery__dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={
                index === activeSlide
                  ? "gallery__dot gallery__dot--active"
                  : "gallery__dot"
              }
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
