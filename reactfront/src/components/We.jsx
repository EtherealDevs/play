import React from 'react'
import CardSkills from './CardSkills'

function We() {
  return (
    <section id='We' className='flex flex-col items-center justify-center'>
      <div className='flex flex-col w-full 2xl:w-screen h-screen items-center justify-evenly sbottom-0'>
          <h2  className="text-5xl lg:mt-16 md:mt-16 mb-0 font-bold text-white">
            Nosotros
          </h2>
          <div className='h-3/4 w-4/5 overflow-hidden'>
            <CardSkills/>
          </div>
      </div>
      <div className="flex justify-center">
        <a href='#Posts' className="sm:mt-0 items-center rounded-full bg-[#b17dc0] px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-100 hover:text-black focus:outline-none focus:ring focus:ring-yellow-400">
            Continuar
        </a>
      </div>
    </section>
  )
}

export default We