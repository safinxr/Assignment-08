import React from 'react';
import './SelectedArea.css'
const SelectedArea = ({animeInfo}) => {
    const {img, name, price} =animeInfo
    return (
        <div className='my-4 shadow-lg p-3 d-flex justify-content-between align-items-center xo'>
            <div className='d-flex align-items-center selected-anime '>
                <img src={img} alt="" />
                <h4>{name}</h4>
            
            </div>
            <div>
                <h4 className='text-right'><i className="fa-solid fa-trash"></i></h4>
            </div>
        </div>
    );
};

export default SelectedArea;