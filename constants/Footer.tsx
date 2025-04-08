// Footer.tsx
import React from 'react';
import * as images from './../assets/index';
import {
  FaGooglePlay,
  FaAppStore,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container mx-auto py-12 px-4">
        {/* Logo and Description */}
        <div className="flex items-center justify-center mb-8">
          <img src={images.LOGO.src} width={190} alt="Logo" className="mr-4" />
        </div>

        {/* App Store Badges */}
        <div className="flex items-center justify-center mb-8">
          <a href="#" className="mr-4">
            <img
              src="https://imgs.search.brave.com/SHaTL-qTVYRN1gLucpBcEVWhrgZx_ybQ8RactPd3QFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3BsYXktc3RvcmUt/bG9nby1wbmcvcGxh/eS1zdG9yZS1sb2dv/LW5pc2ktZmlsdGVy/cy1hdXN0cmFsaWEt/MTEucG5n"
              className="w-40 h-auto rounded-lg"
              alt="Google Play Badge"
            />
          </a>
          <a href="#">
            <img
              src="https://cdn.statically.io/img/lazarillo.app/wp-content/uploads/2022/10/appstore.png?quality=100&f=auto"
              className="w-40 h-auto"
              alt="App Store Badge"
            />
          </a>
        </div>

        {/* Footer Links */}
        <nav className="flex justify-center mb-8">
          <ul className="flex flex-wrap justify-center text-sm text-gray-300">
            <li className="mx-4 mb-2">
              <a href="#" className="hover:text-white">
                Match Highlights
              </a>
            </li>
            <li className="mx-4 mb-2">
              <a href="#" className="hover:text-white">
                Latest News
              </a>
            </li>
            <li className="mx-4 mb-2">
              <a href="#" className="hover:text-white">
                Fan Community
              </a>
            </li>
            <li className="mx-4 mb-2">
              <a href="#" className="hover:text-white">
                RushScore Store
              </a>
            </li>
            <li className="mx-4 mb-2">
              <a href="#" className="hover:text-white">
                Terms and Conditions
              </a>
            </li>
            <li className="mx-4 mb-2">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright and Developer Info */}
        <div className="flex flex-col items-center text-center text-base text-gray-500">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} RushScore, Inc. All Rights Reserved.
          </p>
          <p className="flex items-center justify-center">
            Powered by
            <a
              href="https://www.upwork.com/freelancers/~01d8887ce78def0f76"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-medium text-white transition-colors duration-300 focus:outline-none"
              aria-label="Visit developer's GitHub profile"
            >
              Moenes Mannai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
