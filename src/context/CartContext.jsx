import React, { createContext, useState } from "react";

// Create Context
export const CartContext = createContext();

// Context Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add Item to Cart
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    // Remove Item from Cart
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
