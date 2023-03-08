import axios from 'axios'
import { useState , useEffect } from 'react'
import {useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog=()=>{
    const [title, setTitle]= useState('')
    const [content, setContent]= useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) =>{
        e.preventDefault()
        await axios.put(URI+id,{
            title: title,
            content: content
        })
        navigate('/')
    }

    useEffect(()=>{
        getBlogById()
    },[])

    const getBlogById= async ()=>{
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }

    return(

        <div className='container'>
            <h3>Edit Blog</h3>
            <form onSubmit={update}>
                <div className='m-3 '>
                    <label className='block mb-2 text-sm font-medium text-gray-900 '>Title</label>
                    <input 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        type="text"
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    />
                </div>
                <div className='m-3'>
                    <label className='block mb-2 text-sm font-medium text-gray-900 '>Content</label>
                    <textarea
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}
                        type="text"
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' 
                    />
                </div>
                <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Udate</button>
            </form>
        </div>

    )
}

export default CompEditBlog