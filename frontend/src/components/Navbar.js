import '../styles/Navbar.css';  
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faShoppingBasket} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <div class="navbar">
            <div class="icon">
            <img src="./images/Vector (2).png" class="logo"/>
                <h2 class="logo-text">Womazing</h2>
            </div>
            <ul class="navbar-menu">
                <li class="navbar-li-text">
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/store">Магазин</Link>
                </li>
                <li>
                    <Link to="/about">О бренде</Link>
                </li>
                <li>
                    <Link to="/contact">Контакты</Link>
                </li>
            </ul>
            <div class="contact-info">
                <FontAwesomeIcon icon={faPhone} size="lg" className='icon' />       
                <a class="tel-num">+7 (495) 823-54-12</a>
                <Link to="/basket"> <FontAwesomeIcon icon={faShoppingBasket} size="lg" className='icon-basket'/>  </Link>
            </div>
        </div>
    );
  }
  
  export default Navbar;
  