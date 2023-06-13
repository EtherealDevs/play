import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <section id='Intro'>
      <div className='fondo z-10'>
       
        <div className='flex w-full h-full justify-center items-center'>
          <div className='h-1/2 w-1/2 flex items-center justify-center'>
          <a className='h-fit w-fit transition ease-in-out delay-150 hover:scale-110' href='#Start'> 
          <img alt='Play' src='/play.png'/>
          </a>
        </div>
      
      </div>
      </div>
    </section>
  )
}

export default Intro