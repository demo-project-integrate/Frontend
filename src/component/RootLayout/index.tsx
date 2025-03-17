import React from 'react';
import { Outlet } from 'react-router';
import SideMenu from '../sidemenu';


const RootLayout: React.FC = () => {
    return (
        <div className='flex flex-row'>
            <div className='w-[250px]'>
                <SideMenu />
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};


export default RootLayout;