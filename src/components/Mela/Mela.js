import React from 'react';
import { useEffect, useState } from 'react';
import Furniture from '../Furniture/Furniture';
import Cart from '../Cart/Cart';
import './Mela.css';

const Mela = () => {
    const [furnitures, setFurnitures] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setFurnitures(data))
    }, []);
    // console.log(furnitures);

    const addToCart = (selectedFurniture) => {
        let newCart = [];
        const prodcutFound = cart.find(product => product.id === selectedFurniture.id);
        if (!prodcutFound) {
            newCart = [...cart, selectedFurniture];
        }
        else {
            newCart = [...cart];
        }
        setCart(newCart);
    }
    return (
        <div>
            <div className='main-container'>
                <div className='furniture-container'>
                    {furnitures.map(furniture => <Furniture
                        key={furniture.id}
                        furniture={furniture}
                        addToCart={addToCart}
                    ></Furniture>)}
                </div>
                <div className='cart-container'>
                    <h2>Selected Furnitures</h2>
                    {
                        cart.map(furniture => <Cart
                            key={furniture.id}
                            furniture={furniture}
                        >
                        </Cart>)
                    }
                    <button>Choose 1 For Me {cart.length}</button>
                    <br />
                    <button>Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Mela;