import '../styles/Card.css'

function Card({image,description ,name,price}) {
    return (
        <div className="card">
            <div className='card-img' style={{ backgroundImage: `url('${image}')` }}></div>
            <p className="img-content">{description}</p>
            <p className="img-content-p">{name}</p>
            <p className='img-content-price'>${price}</p>
        </div>
    )

}

export default Card;