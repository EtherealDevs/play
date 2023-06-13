import PlayLogo from '../../../assets/play.png'

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
      <nav className="z-30 flex sticky top-0 bg-[#8c4c9d]">
        <div className='justify-start h-20 ml-20'>
          <a href="Start" className="flex mt-4 items-center">
            <img src={PlayLogo} className="h-12 justify-start" alt="Play Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-alfa"></span>
            </a>
        </div>
        <div className="items-center mx-auto m-4">
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
      </nav>
  )
}

