import React from 'react'
import '../App.css'

function Contact() {
  return (
    <section id='Contact'>
       <div className="flex mt-10 items-center justify-center mb-24">
        <div className='h-full w-full'>
            <div className='mb-10'> 
            <h1 className="font-bold mt-10 italic text-3xl text-white">Consulta</h1>
              <div className='puzzle lg:mt-15 md:mt-10'>
                <div className='lg:py-16'>
                    <div className='lg:py-32 px-32'>
                        <div className='justify-center flex'>
                          <div className="grid gap-10 sm:grid-cols-2">
                              <div className="grid">
                                <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                  <input type="text" name="first-name" id="first-name" className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Nombre" />
                                  <label htmlFor="first-name" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Nombre de tu bendi</label>
                                </div>
                              </div>
                                <div className="grid">
                                  <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                    <input type="text" name="phone" id="phone" className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Telefono" />
                                    <label htmlFor="phone" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Numero de Telefono</label>
                                  </div>
                                </div>
                              <div className="grid">
                                <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                  <input type="email" name="email" id="email" className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="E-mail" />
                                  <label htmlFor="email" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">E-mail</label>
                                </div>
                              </div>
                              <div className="grid">
                                <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                  <input type="number" name="edad" id="edad" className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Edad Bendi" />
                                  <label htmlFor="edad" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Edad bendi</label>
                                </div>
                              </div>
                              <div className="grid">
                                <div className="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                  <textarea type="text" name="consulta" id="consulta" className="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Consulta" />
                                  <label htmlFor="consulta" className="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Consulta
                                  </label>
                                </div>
                              </div>
                              <div className="flex mt-0 justify-center">
                                <button href="#" className="items-center rounded-full bg-[#b17dc0] px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-100 hover:text-black focus:outline-none focus:ring focus:ring-yellow-400">
                                    Enviar
                                </button>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Contact