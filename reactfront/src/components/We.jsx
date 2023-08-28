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
    </section>
  )
}

export default We