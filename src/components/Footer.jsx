import footerLogo from "../assets/footer-logo.png";
import iconWhatsapp from "../assets/icon-whatsapp.png";
import iconLocation from "../assets/icon-location.png";
import iconFacebook from "../assets/icon-facebook.png";
import iconInstagram from "../assets/icon-instagram.png";
import "./Footer.css";

const mainLinks = ["Это мы", "Кто мы", "Почему мы?", "Остались вопросы", "Контакты"];

const phoneNumbers = [
  "+7 (708) 802 88 88",
  "+7 (708) 803 88 88",
  "+7 (708) 51 51 518",
  "+7 (700) 51 51 518",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__col footer__brand">
          <img src={footerLogo} alt="Euro Truck Service" />
        </div>

        <div className="footer__col">
          <h4>Главная</h4>
          <ul>
            {mainLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Контакты</h4>
          <ul>
            {phoneNumbers.map((phone) => (
              <li key={phone}>{phone}</li>
            ))}
          </ul>
          <div className="footer__contact-line">
            <img src={iconWhatsapp} alt="" />
            <span>+7 (708) 802 88 88</span>
          </div>
          <div className="footer__contact-line">
            <img src={iconLocation} alt="" />
            <span>г. Бишкек, ул. Ляляля 69</span>
          </div>
        </div>

        <div className="footer__col">
          <h4>Следите за нами</h4>
          <div className="footer__contact-line">
            <img src={iconFacebook} alt="" />
            <span>truck_service_ofFiciaL</span>
          </div>
          <div className="footer__contact-line">
            <img src={iconInstagram} alt="" />
            <span>truck_service_ofFiciaL</span>
          </div>
        </div>
      </div>

      <div className="footer__divider" />

      <div className="container footer__bottom">
        <p>Copyright © Truck Services 2022. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
