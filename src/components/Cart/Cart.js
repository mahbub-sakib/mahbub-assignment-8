import React from 'react';

const Cart = (props) => {
    const { furniture } = props;
    console.log(furniture);
    return (
        <div>
            {
                <h5>{furniture.name}</h5>

            }
        </div>
    );
};

export default Cart;