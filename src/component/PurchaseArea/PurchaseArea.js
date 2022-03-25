import React, { useEffect, useState } from 'react';
import './PurchaseArea.css'
import Cards from '../Cards/Cards';

const PurchaseArea = () => {
    const [animes, setAnimes] = useState([])
    useEffect(()=>{
        fetch('animedb.json')
        .then(res => res.json())
        .then(data => setAnimes(data))
    },[])
    return (
        <div className='row m-5'>
            <div className='col-12 col-md-9 row'>
                {
                    animes.map(anime => <Cards animeInfo={anime} key={anime.id}></Cards>)
                }
            </div>

            <div className='col-12 col-md-3'>
                <h1>Selected Anime</h1>
            </div>
        </div>
    );
};

export default PurchaseArea;