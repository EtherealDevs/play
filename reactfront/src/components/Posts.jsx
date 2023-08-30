import React from 'react'
import ModalPosts from './ModalPosts'
import { useState , useEffect } from 'react'
import axios from "axios";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const URI = 'http://localhost:8000/blogs/'

function Posts({blog}) {
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

    //Cantidad de blogs
    const cantBlogs=blogs.length

  return (
    <section id='Posts' className='w-full 2xl:w-screen 2xl:h-screen'>
      <div className="text-yellow-50 pt-12 pr-0 pb-14 pl-0">
        <div className=" pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="flex justify-center sm:px-5 md:flex-row">
            <div className="flex flex-col pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                <div className='px-12 py-12 justify-center rounded-xl'>
                  <p className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Posts</p>
                  <p className="inline text-white text-sm font-extrabold mr-1">y Anuncios Importantes</p>
                </div>
              </div>
            </div>
          </div>


            {/* Carrousel de Posts */}
            <div className="container mx-auto ">
              <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                  {/* Carousel for desktop and large size devices */}
                  <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={cantBlogs} visibleSlides={4} step={1} infinite={true}>
                      <div className="w-full relative flex items-center justify-center">
                          <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 cursor-pointer" id="prev">
                              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </ButtonBack>

                          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                              <Slider>
                                  <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                  {blogs.map((blog)=>(
                                      <Slide index={blog.id}>
                                          <div className="flex flex-shrink-0 relative w-[296px] h-[480px] sm:w-auto">
                                              <img src={'http://localhost:8000/img/'+ blog.Image.filename} alt="black chair and white table" className="object-cover object-center w-full h-full rounded-2xl"/>
                                              <div className="bg-gray-800 rounded-2xl bg-opacity-30 absolute w-full h-full p-6">
                                              <div className='xl:h-[80%]'>
                                              <h2 className="lg:text-xl xl:mb-24 xl:mt-10 font-bold leading-4 text-base lg:leading-5 text-white">
                                                    {blog.title}
                                                  </h2>
                                                  
                                                  <div className="flex xl:mb-10 justify-center items-center pb-6">
                                                      <p className=" justify-center lg:text-md font-semilight lg:leading-5 break-all text-white">{blog.content}</p>
                                                  </div>
                                              </div>
                                                  <div className="items-end xl:mt-2"> 
                                                    <ModalPosts className="justify-center" blog={blog}/>
                                                  </div>
                                             </div>
                                          </div>
                                      </Slide>
                                      ))}
                                  </div>
                              </Slider>
                          </div>

                          <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8" id="next">
                              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </ButtonNext>
                      </div>
                  </CarouselProvider>
              </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Posts