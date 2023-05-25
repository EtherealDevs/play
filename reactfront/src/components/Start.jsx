import React from 'react'
import '../App.css'

function Start() {
  return (
    <section className='intro1' id='Start'>

    <div class="bg-transparent flex items-center justify-center flex-col min-h-screen">
       
        <div class=" p-10 rounded-xl">
    
            <div class="flex flex-col justify-center items-center text-white text-center">
                <div class="max-w-sm text-5xl mb-10 font-bold font-sans">
                <h2>Bienvenidos a Play</h2>
                </div>
                <div class="font-light max-w-lg mt-4 text-xl mb-10">
                <span>El Espacio Infantil de los peques</span>
                </div>
            </div>


            <div class="flex gap-10 flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                <div class="bg-[#fff8dd] rounded-xl">
                    <div class="flex w-72 flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 h-72">
                        <div class="mt-3 font-semibold text-lg">Desarollo de la convivencia</div>
                        <div class="text-sm mt-6 font-light">Niños y niñas inician su vida social en un mundo cambiante, lleno de nuevos retos en torno a la idea de convivencia,</div>
                    </div>
                </div>

                <div class="bg-[#F9ECFF] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 h-72">
                        <div class="mt-3 font-semibold text-lg">Emociones nuevas</div>
                        <div class="text-sm mt-6 font-light w-60 md:w-auto">Desarrollan empatía y responsabilidad social</div>
                    </div>
                </div>
                <div class="bg-[#daddff] rounded-xl">
                    <div class="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-72 h-72">
                        <div class="mt-3 font-semibold text-lg">Capacitacion a padres</div>
                        <div class="text-sm mt-6 font-light w-60 md:w-auto">por lo cual intentamos inspirar en ellos y en sus familias nuevas formas de entender y asimilar la realidad</div>
                    </div>
                </div>
            </div>

            <div class="flex mt-24 justify-center">
            <button href="#" className="mt-4 sm:mt-8 inline-block rounded-full bg-[#b17dc0] px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-100 hover:text-black focus:outline-none focus:ring focus:ring-yellow-400">
                Mas Informacion
              </button>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Start