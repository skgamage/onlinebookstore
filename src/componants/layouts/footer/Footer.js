import React from "react";
import './footer.styles.css';

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="container">
                <h2>If you have any quaries feel free to ask here</h2>

                <form className="footer-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" id="name" className="form-input" placeholder="Enter your name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" id="email" className="form-input" placeholder="Enter your Email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="quary" className="form-label">Quary</label>
                        <textarea className="form-input" id="quary" placeholder="Type your Quary"></textarea>
                    </div>

                    <div className="form-group">
                        <a href="#" className="form-submit">Submit</a>
                    </div>
                </form>

                <p>&copy; 2023 BookWorm. All Rights Reserved.</p>

            </div>
        </section>
    )
}

export default Footer;