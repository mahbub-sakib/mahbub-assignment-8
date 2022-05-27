import React from 'react';
import { useEffect, useState } from 'react';

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
            <h1>mela e jai re!</h1>
            <div className='main-container'>
                <div className='furniture-container'>

                </div>
                <div className='cart-container'>

                </div>
            </div>
        </div>
    );
};

export default Mela;