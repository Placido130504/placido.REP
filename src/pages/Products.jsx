// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const Products = () => {
//     const { addToCart } = useContext(CartContext);

//     const products = [
//         { id: 1, name: "Michael Kaiser Jersey (Blue Lock)", price: 49.99, img: "/BM_10_jersey.jpg" },
//         { id: 2, name: "Nagi Seishiro Figure (Blue Lock)", price: 39.99, img: "/nagi.jpg" },
//         { id: 3, name: "Naruto Poster Collection", price: 19.99, img: "/naruto_posters.jpg" },
//         { id: 4, name: "Dragon Ball Z Kakarot:Daima DLC Bundle", price: 59.99, img: "/DBZ_kakarot.jpg" },
//         { id: 5, name: "Yuta & Rika Figurine (Jujutsu Kaisen)", price: 79.99, img: "/yuta_n_rika_figurine.jpg" },
//     ];

//     return (
//         <div className="container">
//             <h1>&nbsp;&nbsp;&nbsp;&nbsp;All Anime Merchandise</h1>
//             <div className="products">
//                 {products.map((product) => (
//                     <div className="product-card" key={product.id}>
//                         <img src={product.img} alt={product.name} />
//                         <h3>{product.name}</h3>
//                         <p className="price">${product.price.toFixed(2)}</p>
//                         <button onClick={() => addToCart(product)} className="add-to-cart-btn">
//                             Add to Cart
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Products;


import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Products.css"; // Import the new CSS file
const Products = () => {
    const { addToCart } = useContext(CartContext);
    const products = [
        { id: 1, name: "Michael Kaiser Jersey (Blue Lock)", price: 49.99, img: "/BM_10_jersey.jpg" },
        { id: 2, name: "Nagi Seishiro Figure (Blue Lock)", price: 39.99, img: "/nagi.jpg" },
        { id: 3, name: "Naruto Poster Collection", price: 19.99, img: "/naruto_posters.jpg" },
        { id: 4, name: "Dragon Ball Z Kakarot:Daima DLC Bundle", price: 59.99, img: "/DBZ_kakarot.jpg" },
        { id: 5, name: "Yuta & Rika Figurine (Jujutsu Kaisen)", price: 79.99, img: "/yuta_n_rika_figurine.jpg" },
    ];
    return (
        <div className="products-page">
            <h1>All Anime Merchandise</h1>
            <div className="products">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p className="price">${product.price.toFixed(2)}</p>
                        <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Products;
