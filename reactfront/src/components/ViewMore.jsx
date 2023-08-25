import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function ViewMore() {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  
  return (
    <div class=" rounded-lg shadow">

      <Button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-white focus:ring-4 hover:duration-700 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => props.setOpenModal('default')}>
        View More
      </Button>

      <Modal className='backdrop-blur-2xl  bg-cover bg-center bg-no-repeat' show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>

        ddd

      </Modal>


    </div>
    
  )
}


