import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-500 text-white py-4'>
        <div className="logo">
            <span className='font-bold text-xl mx-9'>iTask</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all duration-500'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-500'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
