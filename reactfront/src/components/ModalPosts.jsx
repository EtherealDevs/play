import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import ParseHTML from "./ParseHTMLComponent";

export default function ModalPosts({ blog }) {
  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  const image = blog.Image;
  return (
    <div class="rounded-lg">
      <button
        className="inline-flex items-center justify-center px-2 py-1 text-sm bg-[#a0679b] font-medium text-center text-white backdrop-blur-sm rounded-lg"
        onClick={() => props.setOpenModal("default")}
      >
        <svg
          class="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>

      <Modal
        className="backdrop-blur-2xl bg-stone-900 bg-cover bg-center bg-no-repeat"
        key={blog.id}
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {blog.title}
        </Modal.Header>

        <img
          class="rounded-t-lg h-3/4"
          src={"http://localhost:8000/img/" + image.filename}
          alt=""
        />

        <Modal.Body>
          <div className="space-y-6">
            <ParseHTML
              classes="mb-3 font-normal text-gray-700 dark:text-gray-400"
              html={blog.content}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="inline-flex justify-end items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-sky-800 focus:ring-4 hover:duration-700 focus:outline-none"
            color="gray"
            onClick={() => props.setOpenModal(undefined)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 0 1 1.414 0L10 8.586l4.293-4.293a1 1 0 1 1 1.414 1.414L11.414 10l4.293 4.293a1 1 0 0 1-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L8.586 10L4.293 5.707a1 1 0 0 1 0-1.414Z"
                clip-rule="evenodd"
              />
            </svg>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
