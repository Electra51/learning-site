// import React from 'react';
// import './AllCourses.css'
// const AllCourses = () => {
//     return (
//         <div>
//         {/* // <div className='courseCat'>
//         //     <div className="courses border">
//         //         cot
//         //     </div>
//         //     <div className="category border">
//         //         cat
//         //     </div>
//         </div> */}
//             </div>
//     );
// };

// export default AllCourses;
import React from 'react';
import { Link } from 'react-router-dom';
import './AllCourses.css'

const AllCourses = (props) => {
    const { name, img } = props.course;
    // console.log(props)
    // const { handleClick } = props;
    
    return (
        <div>
            
<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <Link to='' onClick={()=>props.handleClick(props.course)}>
        <img className="rounded-t-lg" src={img} alt=""/>
    </Link>
    <div className="p-5">
        <Link to=''  onClick={()=>props.handleClick(props.course)}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
        
       
    </div>
</div>

        </div>
    );
};

export default AllCourses;