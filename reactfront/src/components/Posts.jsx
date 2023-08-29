import React from 'react'
import CardPosts from './CardPosts'
import { useState , useEffect } from 'react'
import axios from "axios";

const URI = 'http://localhost:8000/blogs/'

const ITEMS_PER_PAGE = 4;

function Posts({blog}) {

  // const [datosFromApi, setDatosFromApi] = useState(DATOS_API)
  // const nextHandler = () => {
  //   const totalElementos = datosFromApi.lenght;

  //   const nextPage = currentPage + 1;

  //   const firstIndex = nextPage + ITEMS_PER_PAGE;

  //   if (firstIndex === totalElementos) return;

  //   setItems([...datosFromApi].splice(firstIndex, ITEMS_PER_PAGE))
  //   setCurrentPage(nextPage);
  // }

  // const prevHandler = () => {
  //   const totalElementos = datosFromApi.lenght;

  //   const prevPage = currentPage - 1;

  //   const firstIndex = prevPage + ITEMS_PER_PAGE;

  //   if (prevPage < 0) return;

  //   setItems([...datosFromApi].splice(firstIndex, ITEMS_PER_PAGE))
  //   setCurrentPage(prevPage);
  // }

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
          <div className="grid  xl:grid-cols-4 grid-cols-1 sm:px-5 gap-x-8 gap-y-16">
          
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
                  
                </div>
              </div>
              
            )
          ))}
          </div>
          {/* <div class="inline-flex items-center justify-center rounded bg-[#8c4c9d] py-1 text-white">
            <button onClick={props.prevHandler} class="inline-flex h-8 w-8 items-center justify-center rtl:rotate-180">
              <span class="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button> 

            <span class="h-4 w-px bg-white/25" aria-hidden="true"></span>

            <div>
              <label for="PaginationPage" class="sr-only">Page {props.currentPage}</label>

              <input
                type="number"
                class="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-xs font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                min="1"
                value="2"
                id="PaginationPage"
              />
            </div>

            <span class="h-4 w-px bg-white/25"></span>

            <button
              onClick={props.nextHandler}
              class="inline-flex h-8 w-8 items-center justify-center rtl:rotate-180"
            >
              <span class="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Posts