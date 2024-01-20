import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import { SignUp } from '../components/SignUp';

export const Router_app = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
