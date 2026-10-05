import { useState } from "react";
import photo from "../assets/cta-photo.png";
import "./CTAForm.css";

function CTAForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted:", { name, phone });
  }

  return (
    <section
      className="cta"
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className="container cta__container">
        <form className="cta__card" onSubmit={handleSubmit}>
          <h2>Остались вопросы?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            odio in et, lectus sit lorem id integer.
          </p>

          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />

          <button type="submit" className="btn-primary cta__submit">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}

export default CTAForm;
