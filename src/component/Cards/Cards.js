import React from 'react';
import './Cards.css'
const Cards = ({animeInfo}) => {
    const {img, name, price} = animeInfo
    return (
        <div className='col-12 col-md-4'>
            <div className='shadow-lg card-size'>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Cards;