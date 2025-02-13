'use client'
import React, {  } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { PiCamera } from "react-icons/pi";


const Searchbar = () => {


  return (
    <form className="w-full max-w-lg flex items-center relative">
  <div className="relative flex w-full">
    {/* Search Input */}
    <input
      type="search"
      placeholder="Apparel Accessories"
      className="w-full p-4 pr-32 rounded-full bg-slate-50" // Enough right padding for buttons
    />

    {/* First Search Button (Gray) */}
    <button className="absolute right-24 top-1/2 -translate-y-1/2 p-3 bg-slate-50 rounded-full">
      <AiOutlineSearch className="text-gray-500" size={20} />
    </button>

    {/* Second Search Button (Orange) - Fixing Alignment */}
    <button className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 px-4 py-3 bg-orange-500 text-white rounded-full">
      <PiCamera size={20} />
      <span className="font-medium">Search</span>
    </button>
  </div>
</form>
  )
}

export default Searchbar