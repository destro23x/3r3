import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            <img
              className="w-16"
              alt="logo"
              src="./3r3.svg"
            />
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#about" className="mr-5 hover:text-white">
            O nas
          </a>
          <a href="#products" className="mr-5 hover:text-white">
            Produkty
          </a>
          <a href="#collection" className="mr-5 hover:text-white">
            Skup
          </a>
          <a href="#shop" className="mr-5 hover:text-white">
            Sklep
          </a>
          <a href="#investors" className="mr-5 hover:text-white">
            Inwestorzy
          </a>
          <a href="#cooperation" className="mr-5 hover:text-white">
            Współpraca
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Kontakt
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}