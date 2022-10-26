import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/photos/overhead-view-on-business-people-around-desk-picture-id1138843871?b=1&k=20&m=1138843871&s=170667a&w=0&h=YgcZA0BHvA7YEPI6o4yRpnCQyeIvl8IxvOOZdqw3mVQ=` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p>Start your favourite courses</p>
                        <h1 className="mb-5 text-5xl font-bold">Learn from anywhere & build your future</h1>


                        <label htmlFor="my-modal-3" className="btn btn-outline">Learn More</label>


                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                
                                <p className="py-4">We envision a world where anyone, anywhere has the power to transform their lives through learning. Take the next step in your learning journey by exploring these popular topics.We offer fresh courses on emerging topics that keep your employees ahead of the curve</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;