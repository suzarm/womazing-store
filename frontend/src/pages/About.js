import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BreadCrumb from '../components/BreadCrumb';
import '../styles/About.css';  

function About() {
    return (
        <div className='wrapper-about'>
            <div className='wrapper'>
                <Navbar></Navbar>
                <BreadCrumb homelabel= "Главная" pageName="О бренде"></BreadCrumb>
                <div className="section-main-collection-first-about">
                <div className="section-main-collection-first-about-img"></div>
                    <div className="section-main-collection-first-about-content">
                        <h4 class="h4">Идея и женщина</h4>
                        <p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
                        <p className="p">Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
                    </div>
                    </div>
                    <div class="section-main-collection-second-about">
                        <div className="section-main-collection-second-about-content">
                            <h4 className="h4">Магия в деталях</h4>
                            <p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей. </p>
                            <p className="p">Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </p>
                        </div>
                        <div className="section-main-collection-second-about-img"></div>
                    </div>
                    <div className="about-btn">Перейти в магазин</div>
            </div>
            <Footer></Footer>
        </div>
    );
  }
  
  export default About;
  