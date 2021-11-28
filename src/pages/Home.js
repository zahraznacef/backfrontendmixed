import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Slider from '../components/Slider'
import { useEffect } from 'react';

const Home = () => {
    const [cards, setCards] = useState([]);
    const getcards = () =>{
        axios.get("http://localhost:4000/app/voiture/getAllVoitures").then(res =>{
            setCards(res.data)
        })
    }

    useEffect(() => {
        getcards();
    }, [])

    return (
        <>
            <Slider />
            <div className="recherchevoiture">
                <div className="recherchevoiture-content">
                    
                </div>
            </div>
            <>
                {cards.map(el =>(
                    <>
                        <img src={el.image} />
                        <h1>{el.title}</h1>
                        <h1>{el.description}</h1>
                        <h1>{el.prix}</h1>
                    </>
                ))}
            </>
        </>
    )
}

export default Home
