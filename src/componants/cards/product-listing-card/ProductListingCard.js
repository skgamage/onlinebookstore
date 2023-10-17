import React from "react";
import './productlistingcard.styles.css';
import { Link } from 'react-router-dom';

const ProductListingCard = ({ BookData }) => {
    return (
        <div className="product-listing-card" >
            <div className="product-listing-img-container">
                <img src={BookData.book_url} alt="product-listing-image" className="product-listing-image" />
            </div>
            <div className="product-listing-details-container">
                <h3>{BookData.book_name}</h3>
                <p className="author-name">{BookData.author_name}</p>
                <p className="pricing">&#8360; {BookData.price}</p>
            </div>
            <div className="card-btn-container">
                <Link to={`/book-details/${BookData.id}`} className="product-listing-button">Add To Cart</Link>
            </div>
        </div>
    )
}

export default ProductListingCard;