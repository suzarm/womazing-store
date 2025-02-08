import Card from './Card';
import '../styles/Collection.css';  


function Collection() {

    const cards= [
        {img:'./images/Фото\ товара@2x.png',title:'Футболка USA',text:'$129'},
        {img:'./images/christopher-campbell-va0YmkIFtPA-unsplash\ 1\ \(1\).png',title:'Купальник Glow',text:'$129'},
        {img:'./images/Фото\ товара.png',title:'Свитшот Sweet Shot',text:'$129'}
    ]
    return (
        <div class="section-collection">
            <h1 class="section-collection-title">Новая коллекция</h1>
            <div class="section-collection-images">
                {
                    cards.map((card) => <Card img= {card.img} title={card.title} text={card.text}></Card>)
                }
            </div>
            <button class='section-collection-btn'>Открыть магазин</button>
        </div>
    );
  }
  
  export default Collection;
  