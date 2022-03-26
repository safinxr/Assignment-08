import React from 'react';
import './Cards.css'
const Cards = (props) => {
    const {animeInfo, addButton} = props
    const {img, name, price} =animeInfo
    return (
        <div className='col-12 col-md-6 col-lg-4 card-x'>
            <div className='shadow-lg card-size '>
                <img className='margin-x' src={img} alt="" />
                <div className=' p-2'>
                <h5>{name}</h5>
                <p className='mb-0'>Price: $ {price}</p>
                </div>
                <button onClick={ () =>{addButton(animeInfo)}} className=' add-btn btn-primary fw-bold mt-2'>ADD TO CART <i className="fa-solid fa-cart-shopping"></i></button>       
            </div>
        </div>
    );
};

export default Cards;