import '../styles/Navbar.css';  
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div class="navbar">
            <div class="icon">
                <img src="/images/Vector (2).png" class="logo" />
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
                <img src='/images/Group.png' class="tel"/>
                <a class="tel-num">+7 (495) 823-54-12</a>
                <Link to="/basket"><img src="/images/Group2.png"/></Link>
            </div>
        </div>
    );
  }
  
  export default Navbar;
  