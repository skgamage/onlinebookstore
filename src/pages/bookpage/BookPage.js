import React from "react";
import Navbar from '../../componants/layouts/navbar/Navbar';
import SearchInputForm from '../../componants/forms/searchinputform/SearchInputForm';
import ProductListingAll from "../../componants/layouts/productlistingall/ProductListingAll";
import footer from '../../componants/layouts/footer/Footer';
import Footer from "../../componants/layouts/footer/Footer";

const BookPage = () => {
    return (
        <section>
            <Navbar darkTheme={ true } />

            <div className="search-container">
                <h2>Find the Books that you want</h2>
                <SearchInputForm />
            </div>
            
            <ProductListingAll />
            <Footer />
        </section>
    )
}

export default BookPage;