import logo from "../assets/logo.png";
import iconPin from "../assets/icon-pin.png";
import iconClock from "../assets/icon-clock.png";
import iconPhone from "../assets/icon-phone.png";
import "./Header.css";

const navLinks = ["Это мы", "Почему мы?", "А вот поэтому", "Контакты"];

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="container top-bar__inner">
          <div className="top-bar__item">
            <img src={iconPin} alt="" className="top-bar__icon" />
            <span>
              Наш адрес: <strong>г. Бишкек, ул. Ляляля 69</strong>
            </span>
          </div>
          <div className="top-bar__item">
            <img src={iconClock} alt="" className="top-bar__icon" />
            <span>
              График работы: <strong>С 8:00 до 22:00 без выходных</strong>
            </span>
          </div>
          <div className="top-bar__phones">
            <img src={iconPhone} alt="" className="top-bar__icon" />
            <div>
              <div>+7 (708) 51 51 518</div>
              <div>+7 (700) 51 51 518</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container main-nav">
        <img src={logo} alt="Euro Truck Service" className="main-nav__logo" />

        <nav className="main-nav__links">
          {navLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>

        <button className="btn-primary main-nav__cta">Заказать звонок</button>
      </div>
    </header>
  );
}

export default Header;
