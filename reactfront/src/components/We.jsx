import React from 'react'
import CardSkills from './CardSkills'

function We() {
  return (
    <section id='We' className='flex flex-col h-screen items-center justify-center'>
      <div className='flex flex-col justify-evenly relative bottom-0'>
          <h2  className="italic text-2xl mb-10 font-bold text-white lg:mt-2 sm:text-3xl md:text-5xl">
            Nosotros
          </h2>
        <div className='bg-[#dcd1fe] mb-10 rounded-3xl'>
          <div className='bg-[#f1ecff] translate-x-4 translate-y-4 p-5 rounded-3xl'>
              {/*<div className='mx-lg px-10 flex justify-center items-center'>
                    <p className="w-3/6 font-extrabold text-purple-900 w-full lg:w-1/2">
                      Nuestra mision es formar chicos y prepararlos para un futuro mejor, queremos un mundo mejor, con chicos que tengan valores y puedan tener a mano la mejor herramienta para desarrollar tareas de excelencia, el conocimiento.
                    </p>
              </div> */}
            <div className=''>
              <CardSkills/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
            <a href='#Posts' className="sm:mt-8 items-center rounded-full bg-[#b17dc0] px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-100 hover:text-black focus:outline-none focus:ring focus:ring-yellow-400">
                Continuar
              </a>
            </div>
    </section>
  )
}

export default We