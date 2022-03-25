import React from 'react';
import './Cards.css'
// import logo from '../../img/img2.jpg'
const Cards = ({animeInfo}) => {
    const {img, name, price} = animeInfo
    return (
        <div className='col-12 col-md-4'>
            <div className='shadow-lg card-size p-2'>
                <img className='margin-x' src={img} alt="" />
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default Cards;