import React from 'react'
import '../App.css'

function Contact() {
  return (
    <section id='Contact'>
       <div class="min-h-screen flex items-center justify-center">
        <div className='h-full'>
          <h1 class="font-bold italic text-3xl text-white">Consulta</h1>
            <div className='content-center w-screen'> 
            <div className='puzzle'>
                <div className='py-60'>
                    <div className='justify-center flex'>
                      <div class="grid gap-10  sm:grid-cols-2">
                          <div class="grid">
                            <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                              <input type="text" name="first-name" id="first-name" class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Nombre" />
                              <label html="first-name" class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Nombre de tu bendi</label>
                            </div>
                          </div>
                          <div class="grid">
                            <div class="bg-white first:flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                              <input type="text" name="last-name" id="last-name" class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Apellido" />
                              <label html="last-name" class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Last name</label>
                            </div>
                          </div>
                            <div class="grid">
                              <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                                <input type="text" name="last-name" id="last-name" class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Celular" />
                                <label html="company" class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Numero de Telefono</label>
                              </div>
                            </div>
                          <div class="grid">
                            <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                              <input type="email" name="email" id="email" class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="E-mail" />
                              <label html="email" class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">E-mail</label>
                            </div>
                          </div>
                          <div class="grid">
                            <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                              <input type="select" name="email" id="email" class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Edad Bendi" />
                              <label html="email" class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Edad bendi</label>
                            </div>
                          </div>
                          <div class="grid">
                            <div class="bg-white flex min-h-[60px] flex-col-reverse justify-center rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:shadow-inner">
                              <input type="email" name="email" id="email" class="peer block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Consulta" />
                              <label html="email" class="block transform text-xs font-bold uppercase text-gray-400 transition-opacity, duration-200 peer-placeholder-shown:h-0 peer-placeholder-shown:-translate-y-full peer-placeholder-shown:opacity-0">Consulta</label>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
              
            </div>
              
            </div>

            <div class="flex justify-center">
            <button href="#" className="mt-4 sm:mt-8 inline-block rounded-full bg-[#b17dc0] px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-100 hover:text-black focus:outline-none focus:ring focus:ring-yellow-400">
                Enviar
              </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact