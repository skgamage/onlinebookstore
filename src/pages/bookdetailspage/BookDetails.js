import React from "react";
import Navbar from '../../componants/layouts/navbar/Navbar';
import DetailsSection from "../../componants/layouts/details-section/DetailsSection";
import footer from '../../componants/layouts/footer/Footer';
import Footer from "../../componants/layouts/footer/Footer";

const BookDetails = () => {
    return (
        <section>
            <Navbar darkTheme={ true } />

            <DetailsSection />
            <Footer />
        </section>
    )
}

export default BookDetails;