import React from 'react';
import { Outlet } from 'react-router-dom';
// import Category from '../Pages/Category/Category';

import Header from '../Shared/Header/Header';
// import LeftSide from '../Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div class="antialiased text-gray-800 bg-white dark:bg-gray-800 dark:text-gray-700">
            <div>
            <Header></Header>
                <Outlet></Outlet>
                
            
        </div>
        </div>
    );
};

export default Main;