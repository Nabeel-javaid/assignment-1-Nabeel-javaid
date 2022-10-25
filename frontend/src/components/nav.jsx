import React from 'react'

const Nav = () => {
    return (
        <div className='flex flex-row w-full text-slate-800 h-16 shadow-sm items-center '>
            <ul className='flex flex-row ml-6'>
                <a href='#' className='cursor-pointer  p-3 rounded-lg '>
                    <li className='px-4'>Home</li>

                </a>
                <a href='#' className='cursor-pointer   p-3'>


                    <li className='px-4'>About</li>
                </a>
                <a href='#' className='cursor-pointer p-3'>

                    <li className='px-4'>Contact</li>

                </a>
                <a href='#' className='cursor-pointer p-3'>

                    <li className='px-4'>Become a rider</li>

                </a>
                <a href='#' className='cursor-pointer p-3'>


                    <li className='px-4'>Become a seller</li>
                </a>
            </ul>
        </div>
    )
}

export default Nav
