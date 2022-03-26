import React, { useEffect, useState } from 'react';
import './PurchaseArea.css'
import Cards from '../Cards/Cards';
import SelectedArea from '../SelectedArea/SelectedArea';
import Swal from 'sweetalert2'

const PurchaseArea = () => {
    const [animes, setAnimes] = useState([])
    const [selected, setSelected] = useState([])
    useEffect(()=>{
        fetch('animedb.json')
        .then(res => res.json())
        .then(data => setAnimes(data))
    },[])


    const addButton = (animeInfo) =>{
        if(selected.includes(animeInfo)){
            Swal.fire({
                title: 'Error!',
                text: 'You already added this Anime',
                icon: 'error',
                confirmButtonText: 'Close'
              })
              return;
        }
        if(selected.length >=4){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You already selected 4 Anime',
                
              })
              return;
        }
        else{
            setSelected([...selected, animeInfo])
        }
    }
    return (
        <div className='row'>
            <div className='col-12 col-md-8'>
                <div className='row m-2 g-5'>
                    {
                        animes.map(anime => <Cards animeInfo={anime} key={anime.id} addButton={addButton}></Cards>)
                    }
                </div>
            </div>

            <div className='col-12 col-md-4 my-5'>
                
                <div className='shadow-lg p-3 radius'>
                    <h3>Selected Anime</h3>
                    {
                    selected.map(data => <SelectedArea animeInfo={data} key={data.id}></SelectedArea>)
                    }
                    <div className='mt-5'>
                        <button className='btn btn-success me-4 '>CHOOSE 1 FOR ME</button>
                        <button className='btn btn-info'>CHOOSE AGAIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseArea;