import React from 'react';
import './SelectedArea.css'
const SelectedArea = (props) => {
    const {animeInfo, deleteBtn} = props
    const {img, name, id} =animeInfo
    return (
        <div className=' px-3 py-2 d-flex justify-content-between align-items-center xo'>
            <div className='d-flex align-items-center selected-anime name'>
                <img className='logo-img' src={img} alt="" />
                <h4 className='ms-3'>{name}</h4>
            
            </div>
            <div>
                <h4 onClick={() =>{deleteBtn(id)}} className='text-right'><i className="fa-solid fa-trash"></i></h4>
            </div>
        </div>
    );
};

export default SelectedArea;