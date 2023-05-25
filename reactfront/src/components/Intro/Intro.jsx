import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <section className='justify-center' id='Intro'>
      <div className='fondo z-10 text-center'>
        <div className='mt-20 justify-center'>
        <div className='flex absolute'>
          <div className='content-center w-full ml-10 px-96 py-80 '>
          <div className='ml-72'>
          <a href='#Start'> 
          <img className='w-72 '  alt='Play' src='./play.png'/>
          </a>
          </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Intro