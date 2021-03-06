import React, {useEffect, useState, useContext} from 'react';
import {CustomContext} from "../../../../Context";
import './product.css'
import axios from "axios";
import {useParams} from 'react-router-dom'
import PizzaSize from "../routes/RouteContent/PizzaSize";
import Price from "../routes/RouteContent/Price";
import WantBuy from "../routes/RouteContent/WantBuy";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
import "swiper/css/navigation"
import 'swiper/css';
SwiperCore.use([Navigation]);

const Product = () => {
    const [product, setProduct] = useState({});
    const [rec, setRec] = useState([]);
    const {path, id} = useParams();
    const {minusOne, plusOne} = useContext(CustomContext);

    useEffect(() => {
        axios(`http://localhost:8080/${path}/${id}`)
            .then(({data})=> setProduct(data));

        axios(`http://localhost:8080/${path}`)
            .then(({data})=> setRec(data.slice(0,6)))
    }, []);


    return (
        <div className='product'>
            <div className='product__link'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#FF9846"/>
                    <path d="M11.75 5.75L7.25 10.25L11.75 14.75" stroke="#F2F2F2"/>
                </svg>
                <span className='product__link-text'>Назад</span>
            </div>
            <div className='product__content'>
                <img className='product__content-img' src={product.imageUrl} alt={product.title}/>
                <div className='product__content-info'>
                    <h2 className='product__content-title'>{product.title}</h2>
                    <PizzaSize sizes={product.sizes}/>
                    <div className='product__content-buy'>
                        <Price price={product.price}/>
                        <div className='product__content-line' onClick={()=> minusOne(product)}> </div>
                        <div className='product__content-pay'>
                            <span className='product__content-pay-count'>1</span>
                            <button className='product__content-pay-btn' onClick={()=> plusOne(product)}>+</button>
                        </div>
                    </div>
                    <WantBuy item={product}/>
                </div>
            </div>
            <h3 className='product__rec'>Рекомендуем к этому товару</h3>
            <div className='custom__swiper'>
                <Swiper slidesPerView={3} spaceBetween={90} slidesPerGroup={1} loop={true} loopFillGroupWithBlank={true} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">

                    {rec.map((item, idx)=> (
                        <SwiperSlide>
                            <div className='product__swiper-card'>
                                <img className='product__swiper-img' src={item.imageUrl} alt={item.title}/>
                                <h4 className='product__swiper-title'>{item.title}</h4>
                                <div className='product__swiper-buy'>
                                    <Price price={item.price}/>
                                    <button className='product__swiper-btn'>+</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
};

export default Product;