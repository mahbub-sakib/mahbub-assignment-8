import React from 'react';
import './Furniture.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Furniture = (props) => {
    const { furniture, addToCart } = props;
    const { id, name, price, img } = furniture;
    // console.log(img);
    const imgPath = './images/';
    return (
        <div className='furniture'>
            <img src={imgPath + img} alt="" />
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            <div className='btn-cart-section' onClick={() => addToCart(furniture)}>
                <button className='btn-cart'>
                    <p><strong>Add to Cart</strong> </p>
                </button>
                <FontAwesomeIcon icon={faCartPlus} className='btn-cart'></FontAwesomeIcon>
            </div>


        </div>
    );
};

export default Furniture;