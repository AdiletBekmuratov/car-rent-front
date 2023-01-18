import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <header className="body-font sticky w-full left-0 top-0 filter backdrop-blur-sm bg-black/[0.05] z-50 text-white">
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-bold items-center  mb-4 md:mb-0">
            <span className="ml-3 text-3xl uppercase">Caroro</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center uppercase ">
            <a className="mr-5 hover:text-gray-900">Каталог</a>
            <a className="mr-5 hover:text-gray-900">Условия</a>
            <a className="mr-5 hover:text-gray-900">Контакты</a>
          </nav>
          <div className="text-2xl font-medium">+7 777 777 77 77</div>
        </div>
      </header>
    </>
  );
}
