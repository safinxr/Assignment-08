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

    // Add button area🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔

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
                text: 'You can only choose 4 Anime',
                
              })
              return;
        }
        else{
            setSelected([...selected, animeInfo])
        }
    }

    // Choose button 🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩
    
    const chooseBtn = () =>{
        if(selected.length !== 4){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'You have to selected 4 Anime',
                
              })
              return;
        }
        else{
            const luckyAnime = selected[Math.floor((Math.random() * 4))];
            const {img, name , price} = luckyAnime;
            const discount =Math.floor((Math.random() * 60) + 10);
            const newPrice = price * discount / 100; 
            const discountText =`congratulation you got ${discount}% discount on this anime

            Pegular price : $${price}
            New price: $${newPrice}
            `
            Swal.fire({
                imageUrl:img,
                imageHeight:250,
                title: name,
                text: discountText,
                html:
                `<h4>congratulation you got <span style="color:red; font-weight: 700;">${discount}% discount </span> on this anime </h4>
                <p style="margin:0;">Regular price : <span style="text-decoration: line-through;">$${price}</span></p>
                <p>New price: $${newPrice}</p>
                `,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Purchase'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Purchase successful',
                    'Now enjoy the anime',
                    'success'
                  )
                }
              })
        }
    };


    // CHOOSE AGAIN button 🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖🤖

    const cleanBtn =()=>{
        setSelected([])
    }


    // Purchese display area 📱📱📱📱📱📱📱📱📱📱📱

    return (
        <div className='row'>
            <div className='col-9 col-md-8 col-lg-8 '>
                <div className='row m-2 g-5'>
                    {
                        animes.map(anime => <Cards animeInfo={anime} key={anime.id} addButton={addButton}></Cards>)
                    }
                </div>
            </div>

            <div className='col-3 col-md-4 col-lg-4 my-5'>
                
                <div className='shadow-lg bg card-y p-3'>
                    <h3>Selected Anime</h3>
                    {
                    selected.map(data => <SelectedArea animeInfo={data} key={data.id}></SelectedArea>)
                    }
                    <div className='mt-5'>
                        <button onClick={()=>{chooseBtn()}} className='l-button btn btn-success me-4 '><p>TRY YOUR LUCk</p></button>
                        
                        <button onClick={()=>{cleanBtn()}} className='l-button btn btn-info'><p>CHOOSE AGAIN</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseArea;