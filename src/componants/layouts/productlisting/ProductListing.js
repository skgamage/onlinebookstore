import React from "react";
import './productlisting.styles.css'
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from '../../../utill/BookData';


const ProductListing = () => {
    
    return (
        <div className="product-listing-container">
            <div className="container">
                <h2>Here are some <span className="text-primary">books</span> that you might like</h2>

                <div className="listing-container">
                    {BookData && BookData.slice(0,4).map((book) => (
                        
                        <ProductListingCard BookData={book} key={book.id} />
                    ))}
                    
                </div>
            </div>
            
        </div>
    )
}

export default ProductListing;