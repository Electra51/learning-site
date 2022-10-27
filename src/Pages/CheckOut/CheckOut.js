
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from '../.././Assets/image/image1.jpg'
import { AuthContext } from '../../Contexts/AuthProvider/auth.context';

const CheckOut = ({ data }) => {
  


  

    console.log(data)
    
    return (
        <div>

        <div className='flex gap-7 justify-center pt-8'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
          </div>
          
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
          </div>
          
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
          </div>
          
</div>
</div>





            <div>
            
<section
  class="relative z-20 overflow-hidden bg-dark pt-2 pb-12 lg:pt-[20px] lg:pb-[90px]"
>
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
          <span class="text-white mb-2 block text-lg font-semibold">
            Our Pricing Table
          </span>
          <h2
            class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
          >
            Our Pricing Plan
          </h2>
          <p class="text-body-color text-base">
            There are many variations of pricing available Please select  at least one
          </p>
        </div>
      </div>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center">
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12"
        >
          <span class="text-primary mb-4 block text-lg font-semibold">
            Basic
          </span>
          <h2 class="text-dark mb-5 text-[42px] font-bold">
            $59
            <span class="text-body-color text-base font-medium"> / year </span>
          </h2>
          <p
            class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
          >
            Perfect for using learning basic.
          </p>
          <div class="mb-7">
            <p class="text-body-color mb-1 text-base leading-loose">Full lecture</p>
            <p class="text-body-color mb-1 text-base leading-loose">
              full question solve
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
             Lifetime access : no
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              Free updates
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              Use at once
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              3 Months support
            </p>
                                    
                                    </div>
                                    </div>
                                    
         {/* The button to open modal */}
<label htmlFor="my-modal" className="btn modal-button">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Yay!</label>
    </div>
  </div>
          
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12"
        >
          <span class="text-primary mb-4 block text-lg font-semibold">
           Standard
          </span>
          <h2 class="text-dark mb-5 text-[42px] font-bold">
            $199
            <span class="text-body-color text-base font-medium"> / year </span>
          </h2>
          <p
            class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
          >
            Perfect for using to know more and more
          </p>
          <div class="mb-7">
            <p class="text-body-color mb-1 text-base leading-loose">Full lecture</p>
            <p class="text-body-color mb-1 text-base leading-loose">
              Full Recording
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              Lifetime access : no
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              Free updates
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              Use on 2 week per month
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              4 Months support
            </p>
          </div>
         {/* The button to open modal */}
<label htmlFor="my-modal" className="btn modal-button">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Yay!</label>
    </div>
  </div>
</div>
          
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div
          class="border-primary shadow-pricing relative z-10 mb-10 overflow-hidden rounded-xl border border-opacity-20 bg-white py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12"
        >
          <span class="text-primary mb-4 block text-lg font-semibold">
            Professional
          </span>
          <h2 class="text-dark mb-5 text-[42px] font-bold">
            $256
            <span class="text-body-color text-base font-medium"> / year </span>
          </h2>
          <p
            class="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base"
          >
            Perfect for using in a Professional Pack.
          </p>
          <div class="mb-7">
            <p class="text-body-color mb-1 text-base leading-loose">
              Unlimited Users
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
             All lecture
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              Lifetime access
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              Free updates
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              unlimited question answer
            </p>
            <p class="text-body-color mb-1 text-base leading-loose">
              12 Months support
            </p>
          </div>
          </div>
                                    
         {/* The button to open modal */}
<label htmlFor="my-modal" className="btn modal-button">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Yay!</label>
    </div>
  </div>
          
        </div>
      </div>
    </div>
  </div>
</section>


           </div>
        </div>
    );
};

export default CheckOut;