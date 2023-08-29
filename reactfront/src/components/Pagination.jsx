import React, { Component } from 'react';

const Pagination = (props) => {
    const items = props.items.map((item, index) => {
        return <li></li>
    })

        return (
            <div class="inline-flex items-center justify-center rounded bg-[#8c4c9d] py-1 text-white">

            <button onClick={props.prevHandler} class="inline-flex h-8 w-8 items-center justify-center rtl:rotate-180">
              <span class="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button> 

            <span class="h-4 w-px bg-white/25" aria-hidden="true"></span>

            <div>
              <label for="PaginationPage" class="sr-only">Page: {props.currentPage} </label>

              <input
                type="number"
                class="h-8 w-12 rounded border-none bg-transparent p-0 text-center text-xs font-medium [-moz-appearance:_textfield] focus:outline-none focus:ring-inset focus:ring-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                min="1"
                value="2"
                id="PaginationPage"
              />
            </div>

            <span class="h-4 w-px bg-white/25"></span>

        
            <button onClick={props.nextHandler}
              class="inline-flex h-8 w-8 items-center justify-center rtl:rotate-180"
            >
              <span class="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            
          </div>
        );
    }

export default Pagination;
