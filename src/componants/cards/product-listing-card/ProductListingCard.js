import React from "react";
import './productlistingcard.styles.css';
import ProductImage from '../../../assets/books-images/happy place.jpeg';

const ProductListingCard = () => {
    return (
        <div className="product-listing-card">
                <div className="product-listing-img-container">
                    <img src={ProductImage} alt="product-listing-image" className="product-listing-image" />
                </div>
                <div className="product-listing-details-container">
                    <h3>Happy Place</h3>
                    <p className="author-name">Emily Henry</p>
                    <p className="pricing">&#8360; 300</p>
                    <a href="#" className="product-listing-button">Button</a>
                </div>
         </div>
    )
}

export default ProductListingCard;