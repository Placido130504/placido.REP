// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { ShoppingCart } from "lucide-react";
// import Home from "./pages/Home";
// import Products from "./pages/Products.jsx";
// import Cart from "./pages/Cart";
// import { CartProvider } from "./context/CartContext";
// import "./index.css";

// const App = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <nav className="navbar">
//           <Link to="/">Anime Store</Link>
//           <div>
//             <Link to="/products">Merchandise</Link>
//             <Link to="/cart">
//               <ShoppingCart size={24} />
//             </Link>
//           </div>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="*" element={<h2>Page Not Found</h2>} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import "./index.css";

const App = () => {
  return (
    <CartProvider>
      <Router basename="/">
        <nav className="navbar">
          <Link to="/">Anime Store</Link>
          <div>
            <Link to="/products">Merchandise</Link>
            <Link to="/cart">
              <ShoppingCart size={24} />
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
