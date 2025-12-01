import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
//import SignUp from './SignUp';

const login = () => {
    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add login logic here
        try{
            console.log("Login submitted");
            const requestBody = (e.target as HTMLFormElement);
            const formData = {
                username: (requestBody.username as HTMLInputElement).value,
                password: (requestBody.password as HTMLInputElement).value
            };
            console.log(formData);
            const response = await axios.post('http://localhost:3000/api/v1/login', formData);
            console.log('successful response', response);  
            localStorage.setItem('token', response.data.token);
            navigate("/home");
        } catch(err){
            console.log(err);
        }
    }
  return (
    <div className='bg-linear-to-r from-gray-800 to-gray-600 flex flex-col items-center justify-center h-screen w-screen'>
        <h1 className='text-white mb-5 text-2xl'>LOGIN</h1>
        <form className= 'border border-amber-700 bg-linear-to-r from-black to-gray-700 backdrop-blur-3xl p-5 rounded-3xl' onSubmit={handleLogin}>
            <div className='text-white flex flex-col justify-center m-1 w-80 mb-2 '>
                <label className='ml-2' htmlFor="username">Username:</label>
                <input className='bg-gray-900 p-2 rounded-2xl ' placeholder='username....' type="text" id="username" name="username" required />
            </div>
            <div className='text-white flex flex-col justify-center m-1 w-80 mt-2'>
                <label className='ml-2' htmlFor="password">Password:</label>
                <input className='bg-gray-900 p-2 rounded-2xl ' placeholder='password....'type="text" id='password' name='password' required />
            </div>

            <button className='bg-fuchsia-800 p-2 m-1 mt-3 w-80 rounded-2xl text-white cursor-pointer' type="submit">Login</button>
            <div className='text-white w-80 flex justify-center'>
                <p className='mr-2'>Don't have an account?</p>
            <Link to='/signup' className='cursor-pointer text-blue-400'>Sign Up</Link>
            </div>
            
        </form>
    </div>
  )
}

export default login