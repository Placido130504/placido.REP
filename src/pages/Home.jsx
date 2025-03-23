import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Updated import path
const Home = () => (
    <div className="home">
        <div className="overlay"></div>
        <h1>Welcome to the Anime Merchandise Store</h1>
        <p>Discover exclusive anime collectibles, figures, and apparel!</p>
        <Link to="/products" className="view-products">Explore Merchandise</Link>
    </div>
);
export default Home;
