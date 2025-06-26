import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className=" bg-slate-800 text-white px-4 py-3 shadow-md ">
      <div className="flex justify-between items-center max-w-7xl mx-auto  ">
        <h1 className="text-2xl md:text-4xl  text-red-500 font-bold ">
          Azeez Blog
        </h1>
        <nav className="flex gap-4 md:gap-8 items-center text-lg md:text-2xl">
          <Link
            to="/"
            className=" hover:text-blue-500 focus:text-red-500 transition-colors duration-200"
            aria-label="Goto homepage"
          >
            Home
          </Link>
          <Link
            to="/create"
            className="w-20 md:w-36 h-8 bg-white md:h-10 text-blue-500 rounded-md flex items-center justify-center font-semi-bold hover:bg-blue-500 hover:text-white focus:text-yellow-400 transition-colors duration-200"
            aria-label="Create a new blog post"
          >
            New Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar