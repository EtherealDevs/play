import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const URI = 'http://localhost:8000/users'

const CreateUser = () =>{
    const [username, setUsername]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const navigate = useNavigate()
    const store = async (e) =>{
        e.preventDefault()
        await axios.post(URI,{username: username, email:email, password:password})
        navigate('/')
    }
    return(
        <div className='container'>
            <h3>Create User</h3>
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
                    <label className='block mb-2 text-sm font-medium text-gray-900 '>Email</label>
                    <textarea
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="text"
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
                <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Store</button>
            </form>
        </div>
    )
}

export default CreateUser