import React from "react"
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import '../../../App.css';


const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="p-2  z-10 rounded-lg h-full shadow md:px-6 sm:py-10 ">
                <div className="grid grid-cols-3 mt-10">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="grid text-sm text-gray-500 sm:mb-0 dark:text-gray-400 text-left font-bold">
                            <li className="mt-5 ml-2">
                                <a href="Start" className="hover:underline text-white">Inicio</a>
                            </li>
                            <li className="mt-5 ml-2">
                                <a href="Posts" className="hover:underline text-white">Posts</a>
                            </li>
                            <li className="mt-5 ml-2">
                                <a href="We" className="hover:underline text-white">Nosotros</a>
                            </li>
                        </ul>
                    </div>
                    <div className="place-content-end col-start-3 flex mr-2">
                        <p className="absolute justify-end font-bold text-white">Contactanos</p>
                        <ul className="flex flex-wrap text-sm space-x-3  sm:mb-0 place-content-center mt-2">
                            <li className="mr-2 transition ease-in-out delay-100 hover:scale-110 ">
                                <a href="https://www.instagram.com/play.multiespacioinfantil/" className="hover:underline text-white">
                                    <BsInstagram className="text-lg"/>
                                </a>
                            </li>
                                <li className="mx-2 transition ease-in-out delay-100 hover:scale-110">
                                <a href="https://wa.me/3794687242" className="hover:underline text-white">
                                    <BsWhatsapp className="text-lg"/>
                                </a>
                                </li>
                            <li className="mr-2 transition ease-in-out delay-100 hover:scale-110">
                                <a href="https://mateodand@gmail.com" className="hover:underline text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="1 3 19 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="text-sm text-white sm:text-center place-content-center mb-10">
                    <a href="#Intro" className=" hover:underline">Play©</a>. All Rights Reserved.
                </span>
                <br />
                <span className="text-sm text-[#602055]   sm:text-center place-content-center mb-10">
                    Creado por <a href="https://ethereal-devs.vercel.app/" className=" hover:underline">Ethereal Devs🪐</a>
                </span>
            </div>
        </footer>
    )
}


export default Footer