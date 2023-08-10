import React from 'react'
import '../App.css'
import { LuHeartHandshake } from "react-icons/lu";
import { RiEmotionFill } from "react-icons/ri";
import { CgBoy } from "react-icons/cg";

function Start() {
  return (
    <section className='intro1 h-screen flex items-center justify-center' id='Start'>

    <div className="flex items-center justify-evenly flex-col h-full sm:pt-16 sm:pb-6 pt-14 pb-6 w-full">
            <div className="flex flex-col w-full justify-center items-center text-white text-center">
                <div className="text-2xl sm:text-3xl mt-2 font-bold font-sans">
                <h2>Bienvenidos a Play</h2>
                </div>
                <div className="text-md sm:text-lg font-light">
                <span>El Espacio Infantil de los peques</span>
                </div>
            </div>

           <div className="grid gap-4 grid-rows-3 mt-5 mb-5 lg:my-10 sm:grid-rows-1 sm:grid-cols-3 h-[90%] w-[80%] lg:gap-10 cursor-default">
            <div className="bg-rose-300 rounded-xl h-full -translate-x-2 -translate-y-2">
                <div className="flex flex-col justify-center rounded-xl bg-white shadow-xl translate-x-2 translate-y-2 h-full group hover:bg-rose-500 transition ease-in-out 300">
                    <div className="group-hover:hidden transition ease-in-out 300 my-1 font-semibold text-md md:mx-5 md:mb-3">Emociones nuevas</div>
                    <RiEmotionFill className='group-hover:hidden transition ease-in-out 300 w-auto text-6xl'/>
                    <div className="hidden lg:block text-sm mt-6 font-light md:w-auto group-hover:block group-hover:text-white group-hover:font-bold group-hover:m-2 mx-2">Desarrollan empatía y responsabilidad social. Capacitandolos para el futuro</div>
                </div>
            </div>
            <div className="bg-amber-100 rounded-xl h-full -translate-x-2 -translate-y-2">
                <div className="flex flex-col justify-center rounded-xl bg-white shadow-xl translate-x-2 translate-y-2 h-full group hover:bg-yellow-300 transition ease-in-out 300">
                    <div className="my-1 font-semibold text-md md:mx-5 md:mb-3 group-hover:hidden transition ease-in-out 300">Desarrollo de la convivencia</div>
                    <LuHeartHandshake className='w-auto text-6xl group-hover:hidden transition ease-in-out 300'/>
                    <div className="hidden lg:block text-sm mt-6 font-light md:w-auto group-hover:block transition ease-in-out 300 group-hover:text-black group-hover:font-bold group-hover:m-2 mx-2">Niños y niñas inician su vida social en un mundo cambiante, lleno de nuevos retos en torno a la idea de convivencia</div>
                </div>
            </div>
            <div className="bg-sky-100 rounded-xl h-full -translate-x-2 -translate-y-2">
                <div className="flex flex-col justify-center rounded-xl bg-white shadow-xl translate-x-2 translate-y-2 h-full group hover:bg-sky-300 transition ease-in-out 300">
                    <div className="my-1 font-semibold text-md md:mx-5 md:mb-3 group-hover:hidden transition ease-in-out 300">Capacitacion a padres</div>
                    <CgBoy className='w-auto text-6xl group-hover:hidden transition ease-in-out 300'/>
                    <div className="hidden lg:block text-sm mt-6 font-light md:w-auto group-hover:block transition ease-in-out 300 group-hover:text-indigo-900 group-hover:font-bold group-hover:m-2 mx-2">Intentamos inspirar en ellos y en sus familias nuevas formas de entender y asimilar la realidad</div>
                </div>
            </div>
            </div>

            <div className="flex justify-center">
            <button href="#" className=" inline-block rounded-full bg-[#b17dc0] px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-100 hover:text-black focus:outline-none focus:ring focus:ring-yellow-400">
                Mas Informacion
              </button>
            </div>

    </div>
    </section>
  )
}

export default Start