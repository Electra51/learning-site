import React from 'react';
import { FaDownload, FaCertificate, FaLanguage, FaLevelDownAlt, FaQuestion, FaStopwatch, FaVideo } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import AllData from '../../AllData/AllData';
import CheckOut from '../../CheckOut/CheckOut';

const NewData = ({ data }) => {
    console.log(data);
    const datanew = useLoaderData();
   
    const { id
        , author } = data;


    // let id;
    // for (const data of data) {
    //     id= data.id;
    // }



    return (
        <div>
            {
                <AllData
                    data={datanew}
                ></AllData>
            }
            
            <div className='detail-course px-10'>
            
            <div className="subject mt-8">
                
                {/* <img src={data[0].img} alt="" className='w-full p-9'/> */}
                
    
                <div className="rounded overflow-hidden shadow-lg border px-5">
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
            <div className="extra mt-8">
            <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        
        
        
        <ul role="list" className="my-7 space-y-5">
            <li className="flex space-x-3">
               
                <FaVideo/>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Total Lecture : {data[0].video}</span>
            </li>
            <li className="flex space-x-3">
               
                <FaStopwatch/>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Total Duration : {data[0].duration}</span>
            </li>
            <li className="flex space-x-3">
                
                <FaLanguage/>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Language : English</span>
                    </li>

                    <li className="flex space-x-3">
                
                <FaQuestion/>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Total Question : {data[0].question}</span>
                    </li>
                    <li className="flex space-x-3">
                
                <FaLevelDownAlt/>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Level : {data[0].level}</span>
                    </li>


                    <li className="flex space-x-3">
                
                    <FaCertificate/>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Certificate : Yes</span>
            </li>
           
           
            
            
        </ul>
                        <Link to={`/category/${id}/checkout`} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Get Premium Access</Link>
                        
    </div>
            </div>
        </div>
            
        </div>
    );
};

export default NewData;