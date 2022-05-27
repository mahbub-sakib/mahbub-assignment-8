import React from 'react';
import './Furniture.css';

const Furniture = (props) => {
    const { furniture } = props;
    const { id, name, price, img } = furniture;
    // console.log(img);
    const imgPath = './images/';
    return (
        <div className='furniture'>
            <img src={imgPath + img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Furniture;