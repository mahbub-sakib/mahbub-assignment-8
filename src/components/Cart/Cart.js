import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { furniture, removeFromCart } = props;
    // console.log(furniture);
    return (
        <div className='cart'>
            <h5>{furniture.name}</h5>
            <FontAwesomeIcon icon={faTrash} className='btn-trash' onClick={() => removeFromCart(furniture)}></FontAwesomeIcon>

        </div>
    );
};

export default Cart;