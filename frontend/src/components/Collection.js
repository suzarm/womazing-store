import Card from './Card';
import '../styles/Collection.css';  


function Collection() {

    const cards= [
        {image:'./images/Фото\ товара@2x.png',description:'grey top',name:'Футболка USA',price:'9'},
        {image:'./images/casmere-cardigan.webp',description:'black cashmere cardigan', name:'Cashmere cardigan',price:'129'},
        {image:'./images/Фото товара (1).png',description:'White sweetShot', name:'Свитшот SweetShot',price:'29'}
    ]
    return (
        <div class="section-collection">
            <h1 class="section-collection-title">Новая коллекция</h1>
            <div class="section-collection-images">
                {
                    cards.map((card) => <Card image= {card.image}  description={card.description} name={card.name} price={card.price}></Card>)
                }
            </div>
            <button class='section-collection-btn'>Открыть магазин</button>
        </div>
    );
  }
  
  export default Collection;
  