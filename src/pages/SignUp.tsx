import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
    const navigate = useNavigate();
    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add signup logic here
        try{
            console.log("Sign Up submitted");
            const requestBody = (e.target as HTMLFormElement);
            const formData = {
                username: (requestBody.username as HTMLInputElement).value,
                password: (requestBody.password as HTMLInputElement).value
            };
            console.log(formData);
            // You can add an API call here to register the user
            const response = await axios.post('http://localhost:3000/api/v1/signup', formData);
            console.log('successful response', response);   
            localStorage.setItem('token', response.data.token);
            navigate("/home");

        } catch(err){
            console.error(err);
        }
    }
  return (
    <div className='bg-linear-to-r from-gray-800 to-gray-600 backdrop-blur-xl  flex flex-col items-center justify-center h-screen w-screen'>
        <h1 className='text-white mb-5 text-2xl'>SIGN UP</h1>
        <form className='bg-linear-to-r from-black to-gray-700 backdrop-blur-3xl p-5 rounded-3xl' onSubmit={handleSignUp}>
            <div className='text-white flex flex-col justify-center w-80 m-1 mb-2'>
                <label className='ml-2' htmlFor="username">Username:</label>
                <input className='bg-gray-900 p-2 rounded-2xl' type="text" id="username" name="username" placeholder='username....' required />
            </div>
            <div className='text-white flex flex-col justify-center w-80 m-1 mt-2'>
                <label className='ml-2' htmlFor="password">Password:</label>
                <input className='bg-gray-900 p-2 rounded-2xl' type="text" id='password' name='password' placeholder='password....' required/>
            </div>
            <button className='w-80 bg-fuchsia-800 rounded-2xl m-1 p-2 mt-3 text-white' type="submit">Sign Up</button>
            <div className='text-white flex justify-center items-center w-80'>
                <p className='mr-2'>Have an account already?</p>
                <Link className=' cursor-pointer text-blue-400' to='/'>Login</Link>
            </div>
        </form>
    </div>
  )
}

export default SignUp;