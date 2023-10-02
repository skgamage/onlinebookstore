import React from "react";
import Showcase from "../../componants/layouts/showcase/Showcase";
import ProductListing from "../../componants/layouts/productlisting/ProductListing";
import Footer from "../../componants/layouts/footer/Footer";

const HomePage = () => {
    return (
        <section> 
            <Showcase/>
            <ProductListing />
            <Footer />
        </section>
    )
}

export default HomePage;