import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function CardPosts({blog}) {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const image = blog.Image;
  return (
    <div class="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Button onClick={() => props.setOpenModal('default')}>{blog.title}</Button>
      <Modal className='backdrop-blur-2xl bg-stone-900 bg-cover bg-center bg-no-repeat' key={blog.id} show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</Modal.Header>
        <img class="rounded-t-lg" src={'http://localhost:8000/img/'+ image.filename} alt="" />
        <Modal.Body>
          <div className="space-y-6">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {blog.content}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-sky-800 focus:ring-4 hover:duration-700 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" color="gray" onClick={() => props.setOpenModal(undefined)}>
          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
    
  )
}


