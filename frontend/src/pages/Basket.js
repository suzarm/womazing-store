import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import BreadCrumb from '../components/BreadCrumb';
import '../styles/Basket.css';  


function About() {
    return (
        <div className='wrapper-basket'>
            <div className='wrapper'>
                <Navbar></Navbar>
                <BreadCrumb homelabel= "Главная" pageName="Корзина"></BreadCrumb>
                <div className="items">
            <p className="item">Товар</p>
            <ul className='first-item-list'>
                <li>Цена</li>
                <li>Количество</li>
                <li>Всего</li>
            </ul>
        </div>
        <div className="items-img">
           <div className="choosen-items">
                <p className="item-close">x</p>
                <div className="img"></div>
                <p className="item-title">Футболка USA</p>
           </div>
            <ul className='second-item-list'>
                <li>$129</li>
                <li className="item-num">1</li>
                <li>$129</li>
            </ul>
        </div>
        <div className="coupon-items">
            <button className="coupon-input">Введите купон</button>
            <button className="coupon-btn">Применить купон</button>
            <button className="coupon-basket">Обновить корзину</button>
        </div>
        <div className="main-footer-content">
            <div className="main-footer-container">
                <span> Подытог : </span>
                <span>  $129</span>
            </div>
        </div>
        <div className="main-footer-end">
            <div className="main-footer-end-text">
                <p> Подытог : </p>
                <p>  $129 </p>
            </div>
            <button className="main-footer-end-btn"><a href='order.html'>Оформить заказ</a></button>
        </div>
            </div>
            <Footer></Footer>
        </div>
    );
  }
  
  export default About;
  