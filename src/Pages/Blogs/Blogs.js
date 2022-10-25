import React from 'react';
import img from '../../Assets/image/Node.png'
import img2 from '../../Assets/image/route.png'
import img3 from '../../Assets/image/cors.jpg'
import img4 from '../../Assets/image/firebase.png';


const Blogs = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
                <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
                Welcome dear!!
                    <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto'>
                       This is our Blogs Page
                    </h2>

                </div>
            </div>
            <div className='max-w-screen-xl sm:mx-auto'>
                <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
                    <div className='space-y-8'>
                        
                        <div className='space-y-8'>
                        <div className='flex'>
                            <img src={img} alt="" height={80} width={100} className='mb-5'/>
                            <p className='text-gray-400'>
                            Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                            </p>
                            </div>
                            <div className='flex'>
                            
                            <img src={img2} alt="" height={60} width={100}/>
                            
                            <p className='text-gray-400'>
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                            </p>
                        </div>

                    </div>
                      

                    </div>
                    <div className='space-y-8'>
                    <div className='flex'>
                           <img src={img3} alt="" height={30} width={100}/>
                            <p className='text-gray-400'>
                                CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

                            </p>
                        </div>
                    <div className='flex'>
                           <img src={img4} alt="" height={30} width={80}/>
                            <p className='text-gray-400'>
                                Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.It is Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code.We use STYTCH, Ory,
                                Supabase, Okta, PingIdentity, Keycloak, Frontegg etc for implement authentication


                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Blogs;