import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="h-[100px] bg-slate-800 text-white px-4 py-3 shadow-md ">
      <div className="flex justify-between items-center mx-auto  ">
        <h1 className="text-[30px] md:text-[50px] text-red-500 ">Azeez Blog</h1>
        <div className="flex gap-5 md:gap-10 items-center text-[30px]">
          <Link to="/" className="text-white hover:text-blue-500 focus:text-red-500">
            Home
          </Link>
          <Link
            to="/create"
            className="w-[150px] bg-white h-[50px] text-blue-500 rounded-md px-2 font-semi-medium hover:bg-blue-500 hover:text-white focus:text-yellow-400"
          >
            New Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar