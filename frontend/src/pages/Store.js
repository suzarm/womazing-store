import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Card from '../components/Card';
import BreadCrumb from '../components/BreadCrumb';
import '../styles/Store.css';  

function Store() {
    const cards= [
        {img:'./images/Фото\ товара@2x.png',title:'Футболка USA',text:'$129'},
        {img:'./images/christopher-campbell-va0YmkIFtPA-unsplash\ 1\ \(1\).png',title:'Купальник Glow',text:'$129'},
        {img:'./images/Фото\ товара.png',title:'Свитшот Sweet Shot',text:'$129'},
        {img:'./images/Фото\ товара@2x.png',title:'Футболка USA',text:'$129'},
        {img:'./images/christopher-campbell-va0YmkIFtPA-unsplash\ 1\ \(1\).png',title:'Купальник Glow',text:'$129'},
        {img:'./images/Фото\ товара.png',title:'Свитшот Sweet Shot',text:'$129'},
        {img:'./images/Фото\ товара@2x.png',title:'Футболка USA',text:'$129'},
        {img:'./images/christopher-campbell-va0YmkIFtPA-unsplash\ 1\ \(1\).png',title:'Купальник Glow',text:'$129'},
        {img:'./images/Фото\ товара.png',title:'Свитшот Sweet Shot',text:'$129'},

    ]
    return (
        <>
            <div className='wrapper'>
                <Navbar></Navbar>
                <BreadCrumb homelabel= "Главная" pageName="Магазин"></BreadCrumb>
                <div class="section-main-collection-name">
                    <ul class="section-main-collection-name-list">
                        <li class="black">Все</li>
                        <li>Пальто</li>
                        <li>Свитшоты</li>
                        <li>Кардиганы</li>
                        <li>Толстовки</li>
                    </ul>
                </div>
                <div className='section-collection-main-images'>
                {
                    cards.map((card) => <Card img= {card.img} title={card.title} text={card.text}></Card>)
                }
                </div>
                <div class="next-page">
                    <span class="first-number">1</span>
                    <span class="second-number">2</span>
                    <i class="fa-sharp fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
  }
  
  export default Store;
  