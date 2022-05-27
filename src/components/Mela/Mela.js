import React from 'react';
import { useEffect, useState } from 'react';
import Furniture from '../Furniture/Furniture';
import './Mela.css';

const Mela = () => {
    const [furnitures, setFurnitures] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setFurnitures(data))
    }, []);
    console.log(furnitures);
    return (
        <div>
            <div className='main-container'>
                <div className='furniture-container'>
                    {furnitures.map(furniture => <Furniture
                        key={furniture.id}
                        furniture={furniture}

                    ></Furniture>)}
                </div>
                <div className='cart-container'>

                </div>
            </div>
        </div>
    );
};

export default Mela;