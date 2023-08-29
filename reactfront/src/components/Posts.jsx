import React from 'react'
import CardPosts from './CardPosts'
import { useState , useEffect } from 'react'
import axios from "axios";
import Pagination from './Pagination';


const URI = 'http://localhost:8000/blogs/'

const ITEMS_PER_PAGE = 4;

function Posts({blog}) {

 const [dataFromApi, setDataFromApi] = useState(URI);

 const [items, setItems] = useState([...URI].splice(0, ITEMS_PER_PAGE))

 const [currentPage, setCurrentPage] = useState(0);
  
 const nextHandler = () => {
   const totalElementos = dataFromApi.length;

   const nextPage = currentPage + 1;

   const firstIndex = nextPage * ITEMS_PER_PAGE;

   if (firstIndex === totalElementos) return;

   setItems([...dataFromApi].splice(firstIndex, ITEMS_PER_PAGE))
   setCurrentPage(nextPage);
 }

 const prevHandler = () => {
   const totalElementos = dataFromApi.length;

   const prevPage = currentPage - 1;

   const firstIndex = prevPage * ITEMS_PER_PAGE;

   if (prevPage < 0) return;

   setItems([...dataFromApi].splice(firstIndex, ITEMS_PER_PAGE))
   setCurrentPage(prevPage);
   }

  /* const image = blog.Image; */
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
          <div className="grid xl:grid-cols-4 grid-cols-1 sm:px-5 gap-x-8 gap-y-16">
          
          {blogs.map((blog)=>(
            (
              <div class="group rounded-2xl relative block bg-black">
                <img
                  alt="Developer"
                  src={'http://localhost:8000/img/'+ blog.Image.filename}
                  class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div class="relative sm:p-6 lg:p-8">
                  <p class="text-xl mt-5 font-bold text-white sm:text-2xl">{blog.title}</p>

                  <div class="mt-5 mb-5 md:py-24">
                    <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p class="text-sm text-white">
                        {blog.content}
                      </p>
                    </div>
                  </div>

                  <div className="mb-10"> 
                    <CardPosts className="justify-end" blog={blog}/>
                  </div>
                  <Pagination currentPage={currentPage} items={blogs} nextHandler={nextHandler} prevHandler={prevHandler}/>
                </div>
              </div>
              
            )
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Posts