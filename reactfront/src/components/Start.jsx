import React from "react";
import "../App.css";
import { LuHeartHandshake } from "react-icons/lu";
import { RiEmotionFill } from "react-icons/ri";
import { CgBoy } from "react-icons/cg";

function Start() {
  return (
    <section
      className="intro1 w-full h-full flex items-center justify-center"
      id="Start"
    >
      <div className="flex items-center justify-evenly flex-col h-full pt-14 pb-6 w-full">
        <div className="flex flex-col w-full justify-center items-center text-white text-center">
          <div className="text-xl lg:text-4xl sm:text-2xl mt-2 font-bold font-sans">
            <h2>Bienvenidos a Play</h2>
          </div>
          <div className="text-sm lg:text-3xl sm:text-md font-light">
            <span>El Espacio Infantil de los peques</span>
          </div>
        </div>
        <div className="grid gap-5 md:gap-10 grid-rows-3 mt-5 mb-5 lg:my-10 sm:grid-rows-1 sm:grid-cols-3 h-[90%] w-[70%] sm:h-96 2xl:h-96 xl:h-80 lg:h-72 md:h-72 lg:gap-10 cursor-default">
          <div className="bg-amber-100 rounded-xl h-full -translate-x-2 -translate-y-2">
            <div className="flex flex-col justify-center rounded-xl bg-white shadow-xl translate-x-2 translate-y-2 h-full group hover:bg-yellow-200 transition ease-in-out 300">
              <div className="group-hover:hidden transition ease-in-out 300 my-1 font-semibold sm:text-md text-sm md:mx-5 md:mb-3">
                Emociones nuevas
              </div>
              <RiEmotionFill className="group-hover:hidden transition ease-in-out 300 w-auto md:text-6xl text-4xl" />
              <div className="hidden lg:block text-xs sm:text-sm mt-6 font-light md:w-auto group-hover:block group-hover:text-black group-hover:font-bold group-hover:m-2 mx-2">
                Desarrollan empatía y responsabilidad social. Capacitandolos
                para el futuro
              </div>
            </div>
          </div>
          <div className="bg-blue-100 rounded-xl h-full -translate-x-2 -translate-y-2">
            <div className="flex flex-col justify-center rounded-xl bg-white shadow-xl translate-x-2 translate-y-2 h-full group hover:bg-blue-200 transition ease-in-out 300">
              <div className="group-hover:hidden transition ease-in-out 300 my-1 font-semibold sm:text-md text-sm md:mx-5 md:mb-3">
                Desarrollo de la convivencia
              </div>
              <LuHeartHandshake className="group-hover:hidden transition ease-in-out 300 w-auto md:text-6xl text-4xl" />
              <div className="hidden lg:block text-xs sm:text-sm mt-6 font-light md:w-auto group-hover:block group-hover:text-black group-hover:font-bold group-hover:m-2 mx-2">
                Niños y niñas inician su vida social en un mundo cambiante,
                lleno de nuevos retos en torno a la idea de convivencia
              </div>
            </div>
          </div>
          <div className="bg-pink-100  rounded-xl h-full -translate-x-2 -translate-y-2">
            <div className="flex flex-col justify-center rounded-xl bg-white shadow-xl translate-x-2 translate-y-2 h-full group hover:bg-pink-200 transition ease-in-out 300">
              <div className="group-hover:hidden transition ease-in-out 300 my-1 font-semibold sm:text-md text-sm md:mx-5 md:mb-3">
                Capacitacion a padres
              </div>
              <CgBoy className="group-hover:hidden transition ease-in-out 300 w-auto md:text-6xl text-4xl" />
              <div className="hidden lg:block text-xs sm:text-sm mt-6 font-light md:w-auto group-hover:block group-hover:text-black group-hover:font-bold group-hover:m-2 mx-2">
                Intentamos inspirar en ellos y en sus familias nuevas formas de
                entender y asimilar la realidad
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:hidden">
          <a
            href="#We"
            className="sm:mt-8 items-center rounded-full bg-[#b17dc0] px-12 py-3 text-sm font-medium text-white transition hidden sm:block hover:bg-blue-100 hover:text-black"
          >
            Continuar
          </a>
        </div>
      </div>
    </section>
  );
}

export default Start;
