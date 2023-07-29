import Leftbar from 'components/Leftbar/Leftbar';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div style={{ display: "flex", width: '100%' }}>
                <Leftbar />
                <div style={{ flex: 2 }}>
                    <Navbar/>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;