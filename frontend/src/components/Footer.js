import '../styles/Footer.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className="footer">
            <div className="footer-navbar">
                <div className="footer-icon">
                    <img  src="/images/Vector (2).png" className="footer-logo" />
                    <h2 className="footer-logo-text">Womazing</h2>
                </div>
                <ul className="footer-navbar-menu">
                    <li><a href="index.html">Главная</a></li>
                    <li><a href="about.html">Магазин</a></li>
                    <li><a href="services.html">О бренде</a></li>
                    <li><a href="contact.html">Контакты</a></li>
                </ul>
                <div className="footer-contact-info">
                    <a href="footer-tel" className="footer-tel">+7 (495) 823-54-12</a>
                    <p className="footer-e-mail">hello@womazing.com</p>
                </div>
            </div>
            <div className="footer-content">
                <ul className="footer-content-list">
                    <li>© Все права защищены</li>
                    <li>Политика конфиденциальности</li>
                    <li>Публичная оферта</li>
                </ul>
                <ul className="footer-content-list">
                    <li>Пальто</li>
                    <li>Свитшоты</li>
                    <li>Кардиганы</li>
                    <li>Толстовки</li>
                </ul>
                <div className="footer-media">
                    <div className="footer-soc-media">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <img src="/images/visa-mastercard 1.png" className="footer-content-img" />
                </div> 
            </div> 
        </div>
    );
}

export default Footer;

  