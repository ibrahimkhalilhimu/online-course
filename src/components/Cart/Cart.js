import React from 'react';
import './Cart.css';

const Cart = (props) => {
   
    const cart =props.cart
    console.log(cart.[0]);
    const total =cart.reduce((sum,cart)=>sum + cart.price,0)
    return (
        <div className="cart-style">
            <h4>Summary</h4><br/>
     
    <h5>Enroll Course: {cart.length}</h5>
    <h6>Total Price: ${total}</h6>
        </div>
    );
};

export default Cart;