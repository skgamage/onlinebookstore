// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import BookPage from './pages/bookpage/BookPage';
import BookDetailsPage from './pages/bookdetailspage/BookDetails';
import Login from './pages/loginpage/Login';
import SignUp from './pages/signup-page/Signup';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/books" element={<BookPage />} />
                <Route path="/book-details/:id" element={<BookDetailsPage/>} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
