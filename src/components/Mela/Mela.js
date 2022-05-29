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
        if (cart.length > 3 && !prodcutFound) {
            alert('No more than 4 products!');
            return;
        }
        if (!prodcutFound) {
            newCart = [...cart, selectedFurniture];
        }
        else {
            newCart = [...cart];
        }
        setCart(newCart);
    }

    const removeFromCart = (selectedFurniture) => {
        let newCart = [];
        const prodcutFound = cart.find(product => product.id === selectedFurniture.id);
        if (prodcutFound) {
            const rest = cart.filter(product => product.id !== selectedFurniture.id);
            newCart = [...rest];
        }
        setCart(newCart);
    }

    const chooseProduct = (chosenProducts) => {
        if (chosenProducts.length > 0) {
            const names = chosenProducts.map(product => product.name);
            const random = Math.floor(Math.random() * names.length);
            alert('Lucky furniture name: ' + names[random]);
        }
    }

    const chooseAgain = () => {
        setCart([]);
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
                            removeFromCart={removeFromCart}
                        >
                        </Cart>)
                    }
                    <button className='btn-summary' onClick={() => chooseProduct(cart)}>Choose 1 For Me</button>
                    <br />
                    <button className='btn-summary' onClick={() => chooseAgain()}>Choose Again</button>
                </div>
            </div>
            <div>
                <h1>How React Works:</h1>
                <p>React JSX ব্যবহার করে আমাদের JavaScript এর ভিতরে HTML কোড লেখার সুযোগ করে দেয়। যদিও সেই HTML কোড গুলা আসল HTML element না, তবে JSX সেগুলোকে আসল HTML কোড এ রুপান্তর করে Rendering এর সময়।
                    React এ component ব্যবহার করার সুবিধা আছে, যেমন একটি website এ যে যে section গুলো দেখে মনে হবে similar in look different in data, সেগুলো একটি component এ রাখতে হয়। এছাড়াও চাইলে যে কোন section
                    ই component এ রাখা যায়, তবে মনে রাখতে হবে, React একমুখী ডেটা transfer করে (One-way Data Binding)। তাই component structure design এর সময় এই বিষয় টা মাথায় রাখতে হয়। DOM manipulate করার জন্য
                    React virtual DOM ব্যবহার করে, যেকোন code update এর জন্য যদি real DOM কে বার বার update করতে হয়, তাহলে overall Rendering process slow হবে। virtual DOM track রাখে code এর কোন অংশ টি update হয়েছে এবং কিভাবে
                    update করলে overall Rendering process fast হবে।
                </p>


            </div>
        </div>
    );
};

export default Mela;