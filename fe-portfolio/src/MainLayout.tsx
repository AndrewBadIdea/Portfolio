import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./pages/Navbar";
import Footer from './pages/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
