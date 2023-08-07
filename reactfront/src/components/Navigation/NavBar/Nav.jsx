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

export default function Nav() {
  return (
      <nav className="z-30 flex sticky top-0 bg-[#8c4c9d] justify-start h-[56px]">
        <div className='m-1 flex justify-center items-center'>
          <a href="/" className="flex items-center mx-5 h-fit rounded-full hover:bg-sky-500 duration-300">
            <img src={PlayLogo} className="h-10 w-10" alt="Play Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-alfa"></span> */}
            </a>
        </div>
        <div className="flex items-center m-1 basis-1/3 grow">
          <div className="items-center justify-between hidden md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0 items-center ">
            {navigation.map((item) => (
              <li className=''>
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(item.current ? 'block py-2 pl-8 pr-8 font-black rounded hover:bg-fuchsia-800 hover:text-white text-violet-300 rounded-lg py-1 px-2 transition ease-in-out delay-50' : '','')}
                  aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </a>
              </li>
                  )
                )
              }
            </ul>
          </div>

        
        </div>

  {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
  <div class="lg:hidden" role="dialog" aria-modal="true">
    {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
      <button>
           <div>
            <div>
              <div>
              
              </div>
            </div>
           </div>
        </button>
      </div>
      <div class="mt-6 flow-root">
      <div id='menu-mobile' className='items-center mx-auto p-4'>
          <div className="items-center justify-between hidden md:flex md:w-auto md:order-1" id="navbar-cta">
              <ul className="flex flex-col font-medium mt-4 border border-gray-100 rounded-lg md:flex-row md:mt-0 md:border-0">
              {navigation.map((item) => (
                <li className='hover:bg-fuchsia-800 hover:text-white text-violet-300 rounded-lg py-1 px-2'>
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(item.current ? 'block py-2 pl-8 pr-8 font-black rounded' : '','')}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </a>
                </li>
                    )
                  )
                }
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
      </nav>

      
  )
}

