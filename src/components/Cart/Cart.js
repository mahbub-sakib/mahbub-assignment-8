import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { furniture } = props;
    // console.log(furniture);
    return (
        <div className='cart'>
            {
                <h5>{furniture.name}</h5>

            }
        </div>
    );
};

export default Cart;