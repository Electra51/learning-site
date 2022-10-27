import React from 'react';

import { useLoaderData } from 'react-router-dom';

import './Category.css'

import NewData from './NewData/NewData';


const Category = () => {
    const datas = useLoaderData();
    // const [checkOut,setCheckOut] =useState([])
    // console.log(datas)

    // const handleButton = (datas) => {
    //    console(datas)
        
    // }
    return (
        <div>

            {
                <NewData
                    data={datas}
                    
                    
                ></NewData>
                // handleButton={handleButton}
                
                
                 
            }
            
            <div>
                
            </div>
        </div>
        
        
    );
};

export default Category;