import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>No anime items in the cart.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.img} alt={item.name} className="cart-item-img" />
                            <div>
                                <h3>{item.name}</h3>
                                <p>${item.price.toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
