import React from "react";
import CarrouselLg from "./Carrousel/CarrouselLg";
import CarrouselMd from "./Carrousel/CarrouselMd";
import CarrouselSm from "./Carrousel/CarrouselSm";
// import ParseHTML from "./ParseHTMLComponent";
import { useState, useEffect } from "react";
import axios from "axios";

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
        <div className=" pt-4 px-5 pb-6 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div className="flex justify-center sm:px-5 md:flex-row">
            <div className="flex flex-col pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div className="flex flex-col h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                <div className=" justify-center rounded-xl">
                  <p className="text-5xl font-bold leading-none lg:text-5xl xl:text-6xl">
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
            <div className="flex items-center justify-center w-full h-full px-4">
              <CarrouselLg blogs={blogs} className="sm:hidden lg:none" />
              <CarrouselMd
                blogs={blogs}
                className="sm:hidden md:none lg:hidden"
              />
              <CarrouselSm blogs={blogs} className="md:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Posts;
