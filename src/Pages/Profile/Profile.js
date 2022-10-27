import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event =>{
        setName(event.target.value)
    }

    return (
          <div class="w-2/4">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Email address
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" readOnly defaultValue={user?.email} type="email" placeholder="Enter email"/>
    </div>
    <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Your Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name"/>
                </div>
                <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Photo URL
            </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
                    
                </div>
                <Form.Check type="checkbox" label="Check me out" />
                <button className='btn btn-outline' variant="primary" type="submit">
                Submit
            </button>

  
                        
  </form>
  
</div>
            
        
    );
};

export default Profile;