import React from "react"
import PlayLogo from '../assets/play.png'


const Footer = ()=>{
    return(
            <footer class="grid grid-cols-3 p-4 bg-white rounded-lg shadow md:px-6 md:py-8 bg-transparent">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <ul class="grid text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mt-4 ml-1 hover:underline  ">Inicio</a>
                        </li>
                        <li>
                            <a href="#" class="mt-4 ml-2 hover:underline ">Nosotros</a>
                        </li>
                        <li>
                            <a href="#" class="mt-4 ml-2 hover:underline  ">Eventos</a>
                        </li>
                    </ul>
                </div>
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400"><a href="https://flowbite.com/" class="hover:underline">Play©</a>. All Rights Reserved.
                </span>
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span>Contactanos</span>
                    <ul class="grid text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="mt-4 ml-1 hover:underline">Instagram</a>
                        </li>
                        <li>
                            <a href="#" class="mt-4 ml-2 hover:underline ">Mail</a>
                        </li>
                        <li>
                            <a href="https://wa.me/3794798404" class="mt-4 ml-2 hover:underline">WhatsApp</a>
                        </li>
                    </ul>
                </div>
            </footer>
    )
}
export default Footer