import React from 'react'
import CardPosts from './CardPosts'
import { useState , useEffect } from 'react'
import axios from "axios";

const URI = 'http://localhost:8000/blogs/'

function Posts() {
  const [blogs, setBlog] = useState([])
    useEffect(()=>{
        getAllBlogs()
    }, [])
    //mostrar todos los blogs
    const getAllBlogs = async ()=>{
        await axios.get(URI).then((res)=>{
            setBlog(res.data)
            console.log(res.data)
        }, (error)=>{
            console.log(error)
        })
    }
  return (
    <section id='Posts' className='w-full 2xl:w-screen h-screen'>
      <div className="text-yellow-50 pt-12 pr-0 pb-14 pl-0 bg-transparent">
        <div className=" pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="flex justify-center sm:px-5 md:flex-row">
            <div className="flex flex-col w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                <div className='px-12 py-12 justify-center rounded-xl'>
                  <p className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Posts</p>
                  <p className="inline text-white text-sm font-extrabold mr-1">y Anuncios Importantes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
          {blogs.map((blog)=>(
            (
              <CardPosts blog={blog}/>
            )
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Posts