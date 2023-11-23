import React from "react";
import ModalPosts from "./ModalPosts";
import ParseHTML from "./ParseHTMLComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const URI = "http://localhost:8000/blogs/";

function Posts({ blog }) {
  /* const image = blog.Image; */
  const [blogs, setBlog] = useState([]);
  useEffect(() => {
    getAllBlogs();
  }, []);
  //mostrar todos los blogs
  const getAllBlogs = async () => {
    await axios.get(URI).then(
      (res) => {
        setBlog(res.data);
        console.log(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <section id="Posts" className="w-full 2xl:w-screen h-full">
      <div className="text-yellow-50 pt-12 pr-0 pb-14 pl-0">
        <div className=" pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="mb-10 flex justify-center sm:px-5 md:flex-row">
            <div className="flex flex-col pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                <div className="px-12 py-12 justify-center rounded-xl">
                  <p className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
                    Posts
                  </p>
                  <p className="inline text-white text-sm font-extrabold mr-1">
                    y Anuncios Importantes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto">
            <div className="flex items-center justify-center py-24 sm:py-8 px-4">
              <div class="container mx-auto p-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                  {blogs.map((blog) => (
                    <div class="bg-white rounded-lg border p-4">
                      <img
                        src={"http://localhost:8000/img/" + blog.Image.filename}
                        alt="Placeholder Images"
                        class="w-full h-48 rounded-md object-cover"
                      />
                      <div class="px-1 py-4">
                        <div class="font-bold text-xl mb-2">{blog.title}</div>
                        <p class="text-gray-700 text-base">{blog.content}</p>
                      </div>
                      <div class="px-1 py-4">
                        <ModalPosts className="justify-center" blog={blog} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts;
