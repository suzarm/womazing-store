import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BreadCrumb from '../components/BreadCrumb';
import '../styles/Contact.css';

function Contact() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <BreadCrumb homelabel="Главная" pageName="Контакты" />
        <div className="section-main-card">Карта с любой точкой</div>
        <div className="section-main-card-content">
          <div className="container-tel">
            <p>Телефон</p>
            <p>+7 (495) 823-54-12</p>
          </div>
          <div className="container-e-mail">
            <p>E-mail</p>
            <p>info@sitename.com</p>
          </div>
          <div className="container-address">
            <p>Адрес</p>
            <p>г. Москва, 3-я улица Строителей, 25</p>
          </div>
        </div>
        <div className="section-form">
          <div className="section-main-title">Напишите нам</div>
          <div className="section-main-form-input">
            <label>Имя</label>
            <input type="text" />
            <label>E-mail</label>
            <input type="email" />
            <label className="phone-label">Телефон</label>
            <input type="tel" />
            <label>Сообщение</label>
            <input type="text" className="message-border" />
          </div>
          <button className="form-btn">Отправить</button>
          <button className="contact-btn">Сообщение успешно отправлено</button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
