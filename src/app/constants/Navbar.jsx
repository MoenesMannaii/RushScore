"use client";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { RiMenu2Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import {
  AiOutlineHome,
  AiOutlineVideoCamera,
  AiOutlineVerified,
} from "react-icons/ai";
import { BiFootball, BiNews } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";
import { TbPremiumRights } from "react-icons/tb";
import * as images from "../../assets/index";
import { SearchBar } from "./Searchbar";

const navigation = [
  { name: "Home", href: "#", current: true, icon: <AiOutlineHome /> },
  { name: "Matches", href: "#", current: false, icon: <BiFootball /> },
  { name: "Clubs", href: "#", current: false, icon: <AiOutlineVerified /> },
  { name: "Videos", href: "#", current: false, icon: <AiOutlineVideoCamera /> },
  { name: "News", href: "#", current: false, icon: <BiNews /> },
  { name: "Premium", href: "#", current: false, icon: <TbPremiumRights /> },
  { name: "Live", href: "#", current: false, icon: <CiStreamOn /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
/*   const [searchHeight, setSearchHeight] = useState(0); */
  const [isSticky, setIsSticky] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set isSticky to true if the scroll position is greater than a certain threshold
      setIsSticky(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isSticky ? "fixed-navbar" : "";

  return (
    <>
      <Disclosure as="nav" className={`bg-[#130D25] ${navbarClass}`}>
        {({ open }) => (
          <>
            <div className="container mx-auto">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white  focus:outline-none">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only"></span>
                    {open ? (
                      <TfiClose className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <RiMenu2Fill
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-10 w-auto"
                      src={images.LOGO.src}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-20 sm:block uppercase">
                    <div className="flex space-x-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "border-b border-[#C89EFC] text-white"
                              : "text-gray-300 hover:text-white",
                            "flex items-center px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <span className="text-sm">{item.icon}</span>
                          <span className="ml-2">{item.name}</span>
                        </a>
                      ))}
                      <button onClick={toggleSearch} className="text-white">
                        <AiOutlineSearch className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden">
                  <a
                    href="#_"
                    className="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer border font-medium"
                  >
                    <span className="relative text-white transition duration-300 group-hover:text-white ease">
                      Login
                    </span>
                  </a>

                  <a
                    href="#_"
                    className="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium bg-[#8a38f4]"
                  >
                    <span className="relative text-white">Signup</span>
                  </a>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full object-cover border"
                          src="https://res.cloudinary.com/dww70arvk/image/upload/v1699383389/czqxqyckpl20k3nr4l1s.jpg"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-[#130D25] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-[#251d43]" : "",
                                "block px-4 py-2 text-sm text-white"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-[#251d43]" : "",
                                "block px-4 py-2 text-sm text-white"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-[#251d43]" : "",
                                "block px-4 py-2 text-sm text-white"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#130D25]  text-white"
                        : "text-gray-300 hover:bg-[#8a38f4]  hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
            <SearchBar isOpen={isSearchOpen} toggleSearch={toggleSearch} />
          </>
        )}
      </Disclosure>
    </>
  );
}
