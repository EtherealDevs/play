import React from 'react'
import CardSkills from './CardSkills'

function We() {
  return (
    <section id='We'>

      <div className="bg-transparent">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className='justify-center'>

            <div className='italic'>
              <h2 className="text-2xl mb-20 font-bold text-white sm:text-3xl md:text-5xl">
                Nosotros
              </h2>
            </div>

            <div className='bg-[#dcd1fe] rounded-3xl'>
              <div className='bg-[#f1ecff] translate-x-4 translate-y-4 p-5 rounded-3xl'>
                <div className='w-full'>
                  <div className='container mx-lg px-10'>
                    <div className='justify-center mx-44 placeholder:'>
                      <p className="w-3/6 mx-64 font-extrabold text-purple-900 md:mt-6 md:block">
                          Nuestra mision es formar chicos y prepararlos para un futuro mejor, queremos un mundo mejor, con chicos que tengan valores y puedan tener a mano la mejor herramienta para desarrollar tareas de excelencia, el conocimiento.
                        </p>
                    </div>
                  </div>
                </div>

                <div className='mt-10'>
                  <CardSkills/>
                </div>
              </div>
            </div>

            <div className="flex mt-10 justify-center">
            <button href="#" className="mt-4 sm:mt-8 inline-block rounded-full bg-[#b17dc0] px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-100 hover:text-black focus:outline-none focus:ring focus:ring-yellow-400">
                Mas Informacion
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default We