import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import PlayLogo from "../../../assets/play.png";
import "../NavBar/Nav.css";

const navigation = [
  { name: "Inicio", href: "#Start", current: true },
  { name: "Nuestra Meta", href: "#About", current: true },
  { name: "Posts", href: "#Posts", current: true },
  { name: "Contacto", href: "#Contact", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure
      as="nav"
      className="z-30 flex sticky top-0 bg-[#8c4c9d] justify-start h-[50px]"
    >
      {({ open }) => (
        <nav>
          <div className="gap-6 max-w-7xl sm:px-6 lg:px-8">
            <div className="flex h-full items-center">
              <div className="inset-y-0 left-0 sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-end">
                <div className="">
                  <a
                    href="/"
                    className="flex h-fit transition ease-in-out delay-150 hover:scale-125"
                  >
                    <img src={PlayLogo} className="h-9 w-9" alt="Play Logo" />
                    {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-alfa"></span> */}
                  </a>
                </div>
              </div>
              <div className="flex  justify-end sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "py-3 pl-5 pr-5 font-black text-white text-sm transition ease-in-out delay-100 hover:scale-110  "
                            : "",
                          ""
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden backdrop-blur-lg animate-fade-down  animate-once animate-duration-1000 animate-delay-150">
            <div className="space-y-1 w-screen h-3/6 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "block py-2 font-black rounded  text-gray-800 px-2 "
                      : "",
                    ""
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </nav>
      )}
    </Disclosure>
  );
}
