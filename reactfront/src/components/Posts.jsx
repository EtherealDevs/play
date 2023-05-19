import React from 'react'
import CardPosts from './CardPosts'

function Posts() {
  return (
    <section id='Posts'>
      <div class="text-yellow-50 pt-12 pr-0 pb-14 pl-0 bg-transparent">
        <div class="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
          <div class="flex flex-col items-center sm:px-5 md:flex-row">
            <div class="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
              <div class="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
                <div className='px-20 py-20 rounded-xl bg-white/20'>
                  <p class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">Posts</p>
                  <p class="inline text-white text-sm font-extrabold mr-1">y Anuncios Importantes</p>
                </div>
                
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="block">
                <img
                    src="https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" class="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"/>
              </div>
            </div>
          </div>

          {/* Posts */}
          <CardPosts/>
        </div>
      </div>
    </section>
  )
}

export default Posts