import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

function Modal({ blog }) {
  console.log(blog);
  return (
    <div
      key={blog.id}
      className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
    >
      <div className="">
        <div className="relative block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/25">
            {/* Fondo oscurecido */}
          </div>
          <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
            <div className="sm:pt-18 py-6 mx-6 pt-12 text-white lg:pt-24">
              <h3 className="text-xl font-bold sm:text-2xl">{blog.title}</h3>
              {blog.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
