import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Category.css'
import { FaDownload } from 'react-icons/fa';

const Category = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='detail-course'>
            
            <div className="subject ">
                
                {/* <img src={data[0].img} alt="" className='w-full p-9'/> */}
                
    
                <div className="rounded overflow-hidden shadow-lg border px-7">
                    <div className="px-6 pt-4 pb-2 flex justify-between">
                        <div className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5'>
{data[0].name}
                        </div>
                        <div>
                        <FaDownload />
                        </div>
        
      </div>
      <img className="w-full border rounded-md" src={data[0].img} alt={data[0].name}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Course Description</div>
        <p className="text-gray-400 text-base">
                            {data[0].detail}
        </p>
      </div>
      
    </div>
            </div>
            <div className="extra border">

            </div>
        </div>
    );
};

export default Category;