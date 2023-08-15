import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import PlayLogo from '../../../assets/play.png'
import '../NavBar/Nav.css'

const navigation = [
  { name: 'Inicio', href: '#Start', current: true },
  { name: 'Nuestra Meta', href: '#We', current: true },
  { name: 'Posts', href: '#Posts', current: true },
  { name: 'Contacto', href: '#Contact', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="z-30 flex sticky top-0 bg-[#8c4c9d] justify-start h-[50px]">
      {({ open }) => (
        <nav>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className=" content-end inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className='m-1 flex justify-center sm:justify-end items-center'>
                  <a href="/" className="flex items-center mx-5 h-fit rounded-full hover:bg-sky-500 duration-300">
                  <img src={PlayLogo} className="h-10 w-10" alt="Play Logo" />
                  {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-alfa"></span> */}
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                      key={item.name}
                      href={item.href}
                      className={classNames(item.current ? 'block py-2 pl-8 pr-8 font-black rounded hover:bg-fuchsia-800 hover:text-white text-violet-300 px-2 transition ease-in-out delay-50' : '','')}
                      aria-current={item.current ? 'page' : undefined}>
                      {item.name}
                    </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="bg-white sm:hidden">
            <div className="space-y-1 w-screen h-3/6 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(item.current ? 'block py-2 pl-8 pr-8 font-black rounded hover:bg-fuchsia-800 hover:text-white text-violet-300 px-2 transition ease-in-out delay-50' : '','')}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </nav>
      )}
    </Disclosure>
  )
}
