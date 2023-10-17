import React from "react";
import './productlistingall.styles.css';

import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from "../../../utill/BookData";

const ProductListingAll = () => {
    return (
        <section className="product-listing-all-container">
            <div className="container">

                <div className="grid-container">
                    {BookData.map((book) => {
                        return (
                            <div className="grid-item">
                                <ProductListingCard BookData={book}/>
                            </div>
                        )
                    })}
                   
                </div>
            </div>
        </section>
    )
}

export default ProductListingAll;