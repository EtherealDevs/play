import React from "react"
import { Link } from "react-router-dom"
import { URL } from "../constDictionary"


const Footer = ()=>{
    return(
            <footer class="p-4 bg-white  shadow md:px-6 md:py-8 dark:bg-gray-900 relative mt-auto inset-x-0 bottom-0">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Link to={URL.ETHEREAL} class="flex items-center mb-4 sm:mb-0">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ethereal Devs</span>
                    </Link>
                    <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 3 <Link to={URL.ETHEREAL} class="hover:underline">EtherealDevs™</Link>. All Rights Reserved.
                </span>
            </footer>
    )
}

export default Footer