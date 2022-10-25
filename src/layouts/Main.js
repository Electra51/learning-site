import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Shared/Header/Header';
import LeftSide from '../Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <div>
            <Header></Header>
            
            <div className='courses gap-4 mt-5 lg:flex flex-row '>
            <div className="basis-1/3 border">
             <LeftSide></LeftSide>
            </div>
  
            <div className="basis-4/5 border">
          <Outlet></Outlet>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Main;