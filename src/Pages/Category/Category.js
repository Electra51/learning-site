import React from 'react';

import { useLoaderData } from 'react-router-dom';

import './Category.css'

import NewData from './NewData/NewData';


const Category = () => {
    const datas = useLoaderData();
    
    return (
        <div>

            {
                <NewData
                    data={datas}
                    
                    
                ></NewData>
              
                
                
                 
            }
            
            <div>
                
            </div>
        </div>
        
        
    );
};

export default Category;