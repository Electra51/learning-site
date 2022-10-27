import React from 'react';
import { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo/logo.png'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

import './Header.css'
const Header = () => {
// const{user}=useContext(AuthContext)
const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div >
            <div className="navbar bg-base-100 antialiased text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/courses'> Courses</Link>
                            </li>

                            <li><Link to='/FAQ'>FAQ</Link></li>
                            <li><Link to='/Blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"> <img src={logo} alt="" height={40} width={27} /> SE Learning</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/courses'>Courses
                            </Link>
                        </li>
                        <li><Link to='/FAQ'>FAQ</Link></li>
                        <li><Link to='/Blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <div className="flex space-x-2">
                    <span className='text-sm text-gray-800 dark:text-gray-500'>Light</span>
                    <div >
                        <input type="checkbox" name="" id="toggle" class="hidden" />
                        <label htmlFor="toggle">
    <div class="w-9 h-5 flex items-center bg-gray-300 dark:bg-gray-400 rounded-full p-1">
      <div class="toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out">

      </div>

                            </div>
                            </label>
                    </div>
                    <span className='text-sm text-gray-400 dark:text-white'>Dark</span>
                </div>
                <div className="navbar-end">
                    <Link className="">{}</Link>
                </div>
                
                
                <>
                            {
                                user?.uid ?
                                    <>
                                        <span> {user?.displayName}</span>
                                        <button className='btn btn-outline' variant="light" onClick={handleLogOut}> Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link className='ml-3' to='/signup'> Signup</Link>
                                    </>
                            }


                        </>
                        <Link className='ml-2 pr-3' to="/profile">
                            {user?.photoURL ?
                                <img title={user.displayName} style={{ height: '35px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </img>
                                : <FaUser></FaUser>
                            }
                        </Link>
            </div>
        </div>
    );
};

export default Header;

// user?.displayName