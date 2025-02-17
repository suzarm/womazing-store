import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Card from '../components/Card';
import BreadCrumb from '../components/BreadCrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useState,useEffect} from "react";


import '../styles/Store.css';  

function Store() {

    const[cards,setCards]=useState([])

    const[selectedCategory,setSelectedCategory]=useState("");
    
    useEffect(() =>{
        fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    useEffect(()=>{
        fetch('http://localhost:3000/products?category=' + selectedCategory)
        .then(res => res.json())
        .then(data => setCards(data))
    },[selectedCategory])

    return (
        <>
            <div className='wrapper'>
                <Navbar></Navbar>
                <BreadCrumb homelabel= "Главная" pageName="Магазин"></BreadCrumb>
                <div className="section-main-collection-name">
                    <ul className="section-main-collection-name-list">
                        <li className={selectedCategory === "" ? "black" : ""}
                            onClick={() => setSelectedCategory("")}>Все
                        </li>
                        <li className={selectedCategory === "Пальто" ? "black" : ""}
                            onClick={() =>setSelectedCategory("overcoat")}>Пальто
                        </li>
                        <li  className={selectedCategory === "Топы" ? "black" : ""}
                             onClick={() => setSelectedCategory("tops")}>Топы
                        </li>
                        <li   className={selectedCategory === "Кардиганы" ? "black" : ""}
                              onClick={() =>setSelectedCategory("cardigans")}> Кардиганы
                        </li>
                        <li className={selectedCategory === "Толстовки" ? "black" : ""}
                            onClick={() =>setSelectedCategory("sweetshot")}>Толстовки
                        </li>
                    </ul>
                </div>
                <div className='section-collection-main-images'>
                    {
                        cards.map((card) => <Card image= {card.image} description={card.description} name={card.name} price={card.price}></Card>)
                    }
                </div>
                <div className="next-page">
                    <span className="first-number">1</span>
                    <span className="second-number">2</span>
                     <FontAwesomeIcon icon={faArrowRight} size="lg"  />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
  }
  
  export default Store;
  