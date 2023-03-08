import axios from 'axios'
import { useState , useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = ()=>{
    const [blogs, setBlog] = useState([])
    useEffect(()=>{
        getBlog()
    },[])
    //mostrar todos los blogs
    const getBlog = async ()=>{
        const res = await axios.get(URI)
        setBlog(res.data)
    }
    //eliminar blog
    const deleteBlog = async (id)=>{
        await axios.delete(`${URI}${id}`)
       getBlog()
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <div className="m-3">
                    <Link to="/create" className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Create</Link>    
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Content
                                    </th>
                                    <th colSpan='2' scope="col" className="px-6 py-3 text-center">
                                        Actions
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                { blogs.map( (blog) => (
                                    <tr key={blog.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {blog.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {blog.content}
                                    </td>
                                    <td class="px-6 py-4">
                                        <Link to={`/edit/${blog.id}`} className="font-medium text-center text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={ ()=>deleteBlog(blog.id) } className='font-medium text-center text-red-600 dark:text-red-500 hover:underline'>Delete</button>
                                    </td>
                                
                                </tr>   
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default CompShowBlogs