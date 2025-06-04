import React from 'react';
import Navbar from '../Components/Share/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Share/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;