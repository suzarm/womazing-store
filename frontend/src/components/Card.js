import '../styles/Card.css'

function Card({img,title ,text}) {
    return (
        <div className="card">
            <div className='card-img' style={{ backgroundImage: `url('${img}')` }}></div>
            <p className="img-content">{title}</p>
            <p className="img-content-p">{text}</p>
        </div>
    )

}

export default Card;