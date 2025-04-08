// Navbar.jsx
"use client";

import { useState, useEffect, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { RiMenu2Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import {
  AiOutlineHome,
  AiOutlineVideoCamera,
  AiOutlineVerified,
} from "react-icons/ai";
import { BiFootball, BiNews } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { TbPremiumRights } from "react-icons/tb";
import * as images from "./../assets/index";
import { SearchBar } from "./SearchBar";

const navigation = [
  { name: "Home", href: "/", current: true, icon: <AiOutlineHome /> },
  { name: "Matches", href: "/matches", current: false, icon: <BiFootball /> },
  {
    name: "Teams",
    href: "/teams",
    current: false,
    icon: <AiOutlineVerified />,
  },
  {
    name: "Videos",
    href: "/videos",
    current: false,
    icon: <AiOutlineVideoCamera />,
  },
  { name: "News", href: "/", current: false, icon: <BiNews /> },
  { name: "Premium", href: "/", current: false, icon: <TbPremiumRights /> },
  { name: "Live", href: "/", current: false, icon: <CiStreamOn /> },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isSticky
    ? "fixed-navbar fixed top-0 left-0 w-full z-50"
    : "";

  return (
    <Disclosure as="nav" className={`bg-[#130D25] ${navbarClass}`}>
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <TfiClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RiMenu2Fill className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Mobile Logo */}
              <div className="flex-1 flex items-center justify-center sm:hidden">
                <img
                  className="h-10 w-auto"
                  src={images.LOGO.src}
                  alt="Your Company"
                />
              </div>

              {/* Mobile Search Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <button
                  onClick={toggleSearch}
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open search</span>
                  <BiSearch className="block h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Logo and Navigation Links (Hidden on Small Screens) */}
              <div className="hidden sm:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-10 w-auto"
                    src={images.LOGO.src}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-20 sm:block">
                  <div className="flex space-x-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "border-b border-[#8A38F4] text-white"
                            : "text-gray-300 hover:text-white",
                          "flex items-center px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <span className="text-base">{item.icon}</span>
                        <span className="ml-2">{item.name}</span>
                      </a>
                    ))}
                    {/* Search Icon Button */}
                    <button onClick={toggleSearch} className="text-white">
                      <BiSearch className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sign In / Sign Up Buttons and Profile Dropdown (Hidden on Small Screens) */}
              <div className="absolute inset-y-0 right-0 lg:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden">
                <div className="space-x-4">
                  <button id="button2">Login</button>
                  <button id="button1">Sign Up</button>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex bg-gray-800 text-sm focus:outline-none rounded-lg">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-12 w-12  object-cover border-[#231b41] border-[1px] rounded-lg"
                        src="https://imgs.search.brave.com/bHAXnPjJGeaQY0fRdCk7KFKffJZzwToorrO27ygbV20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA4Lzhi/L2Y3LzA4OGJmNzYw/NzNhMjFjNWJlMDUx/YTY1YmUwOTgwYTc1/LmpwZw"
                        alt="user profile"
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-[#130D25] py-1 ring-0focus:outline-none">
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

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="bg-[#130D25] border-b border-gray-700">
              <nav className="grid gap-y-4 px-2 py-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#251d43] text-white"
                        : "text-gray-300 hover:bg-[#251d43] hover:text-white",
                      "flex items-center rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </nav>
            </div>
          </Disclosure.Panel>

          {/* Search Bar */}
          <SearchBar isOpen={isSearchOpen} toggleSearch={toggleSearch} />
        </>
      )}
    </Disclosure>
  );
}
