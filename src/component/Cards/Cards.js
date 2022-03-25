import React from 'react';
import './Cards.css'
const Cards = ({animeInfo}) => {
    const {img, name, price} = animeInfo
    return (
        <div className='col-12 col-md-4'>
            <div className='shadow-lg card-size '>
                <img className='margin-x' src={img} alt="" />
                <div className=' px-2'>
                <h4>{name}</h4>
                <p className='mb-0'>Price: $ {price}</p>
                </div>
                <button className=' add-btn btn-primary fw-bold mt-2'>ADD TO CART <i class="fa-solid fa-cart-shopping"></i></button>       
            </div>
        </div>
    );
};

export default Cards;