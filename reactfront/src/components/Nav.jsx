import PlayLogo from '../assets/play.png'

const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Nuestra Meta', href: '#', current: true },
  { name: 'Posts', href: '#', current: true },
  { name: 'Contacto', href: '#', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <div>
      <nav class="border-gray-200  bg-gradient-to-r from-pink-600  to-purple-500">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <img src={PlayLogo} class="h-8 mr-3" alt="Play Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Play</span>
          </a>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          {navigation.map((item) => (
                  <li>
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
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
    </div>
  )
}
