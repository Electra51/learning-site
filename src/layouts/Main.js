import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../Pages/Category/Category';

import Header from '../Shared/Header/Header';
import LeftSide from '../Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <div>
            <Header></Header>
                <Outlet></Outlet>
                
            
        </div>
        </div>
    );
};

export default Main;