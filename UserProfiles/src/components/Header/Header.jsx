import React from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "All Users",
    href: "/profilelist",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Admin",
    href: "/admin",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">

          <span className="hover:cursor-pointer">
            <Link
              to='/'
              className="inline-flex items-center space-x-2"
            >
              <Logo />
              <p className=" text-xl font-bold">Profiles</p>
            </Link>
          </span>
          
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  exact
                  to={item.href}
                  activeClassName="text-[#3977d2]"
                  className={({ isActive }) =>
                    `block py-2 pr-4 
                      pl-3 duration-200
                      font-semibold
                      ${isActive ? "text-[#3977d2]" : "text-gray-700"}
                      border-b 
                      border-gray-100 
                      hover:bg-gray-50 
                      lg:hover:bg-transparent 
                      lg:border-0 
                      hover:text-[#3977d2] 
                      lg:p-0`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <NavLink
            to="#"
            activeClassName="text-[#3977d2]"
            className="text-white bg-[#3977d2] hover:bg-blue-600 hover:text-black focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mt-10"
          >
            Get started
          </NavLink>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="hover:cursor-pointer">
                      <Link
                        to='/'
                        className="inline-flex items-center space-x-2"
                      >
                        <Logo />
                        <p className=" text-xl font-bold">Profiles</p>
                      </Link>
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        onClick={closeMenu}
                      >
                        <span className="ml-3 text-base font-semibold text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex items-center lg:order-2">
                  <NavLink
                    exact
                    to="#"
                    activeClassName="text-[#3977d2]"
                    className="text-white bg-[#3977d2] hover:bg-blue-600 hover:text-black focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mt-10"
                    onClick={closeMenu}
                  >
                    Get started
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
