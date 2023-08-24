import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function CardPosts({blog}) {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  return (
    <div>
      <Button onClick={() => props.setOpenModal('default')}>{blog.title}</Button>
      <Modal className='bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)] bg-cover bg-center bg-no-repeat' key={blog.id} show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>{blog.title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {blog.content}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


