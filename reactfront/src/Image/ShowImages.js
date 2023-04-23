import axios from 'axios'
import { useState , useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const URI = 'http://localhost:8000/image'



const CompShowImages = ()=>{
    const [images, setImage] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        getAllImages()
    },[])
    //mostrar todos las imagenes
    const getAllImages = async ()=>{
        const res = await axios.get(URI)
        .then((response)=>{
            setImage(response.data)
        }, (error)=>{
            console.log(error)
            navigate('/')
        })
    }
    //eliminar imagen
    const deleteImage = async (id)=>{
        await axios.delete(`${URI}/${id}`)
       getAllImages()
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <div className="m-3">
                    <Link to="/image/upload" className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Upload</Link>    
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Filename
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Preview
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Mimetype
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Size
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Path
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Created At
                                    </th>
                                    
                                    <th scope="col" className="px-6 py-3 text-center">
                                        Acciones
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                { images.map( (image) => (
                                    
                                    <tr key={image.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <Link to={"/image/"+image.id}>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {image.id}
                                    </th>
                                    </Link>
                                    <td className="px-6 py-4">
                                        {image.filename}
                                    </td>
                                    <td className="px-6 py-4">
                                        <img src={'http://localhost:8000/img/'+ image.filename} />
                                    </td>
                                    <td className="px-6 py-4">
                                        {image.mimetype}
                                    </td>
                                    <td className="px-6 py-4">
                                        {parseFloat(image.size/1024/1024).toFixed(2)} Megabytes
                                    </td>
                                    <td className="px-6 py-4">
                                        {image.path}
                                    </td>
                                    <td className="px-6 py-4">
                                        {image.CREATED_AT}
                                    </td>
                            
                                    <td className="px-6 py-4">
                                    <button onClick={ ()=>deleteImage(image.id) } className='font-medium text-center text-red-600 dark:text-red-500 hover:underline'>Delete</button>
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
export default CompShowImages