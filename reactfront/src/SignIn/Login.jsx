import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

let axiosConfig = {
    withCredentials: true,
  }

const URI = 'http://localhost:8000/login'

const Login = () =>{
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const navigate = useNavigate()
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI,{username: username, pass:password}, axiosConfig).then((response) => {
            console.log(response);
            navigate('/', {state:1})
        }, (error) => {
            console.log(error);
        });
    }

    return(
        <div className='container'>
            <h3>Login</h3>
            <form onSubmit={store}>
                <div className='m-3 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 '>Username</label>
                    <input
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        type="text"
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                </div>
                <div className='m-3'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 '>Password</label>
                    <input
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                </div>
                <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Log in</button>
            </form>
        </div>
    )
}

export default Login