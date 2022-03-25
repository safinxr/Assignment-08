import React, { useEffect, useState } from 'react';
import './PurchaseArea.css'
import Cards from '../Cards/Cards';
import SelectedArea from '../SelectedArea/SelectedArea';

const PurchaseArea = () => {
    const [animes, setAnimes] = useState([])
    useEffect(()=>{
        fetch('animedb.json')
        .then(res => res.json())
        .then(data => setAnimes(data))
    },[])
    return (
        <div className='row'>
            <div className='col-12 col-md-8'>
                <div className='row g-5 mx-5'>
                    {
                        animes.map(anime => <Cards animeInfo={anime} key={anime.id}></Cards>)
                    }
                </div>
            </div>

            <div className='col-12 col-md-4'>
                <SelectedArea></SelectedArea>
            </div>
        </div>
    );
};

export default PurchaseArea;