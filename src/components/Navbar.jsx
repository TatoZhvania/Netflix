import { async } from '@firebase/util'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try{
            await logOut()  
            navigate('/login')
        } catch(error) {
            console.log(error)
        }
    }

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to='/'>
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>Netflix</h1>
            </Link>

            <div className='hidden md:block'>
                {user?.email ? (
                <div>
                <Link to='/account'>
                    <button className='text-white pr-4' >Account</button>
                </Link>

                    <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white' >Log out</button>
            </div>
            ) : (
                <div>
                <Link to='/login'>
                    <button className='text-white mr-2 p-2 ease-in-out duration-300 hover:text-[#d2d2d2]' >Sign In</button>
                </Link>
                <Link to='/singup'>
                    <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white ease-in-out duration-300 hover:bg-red-500' >Sign Up</button>
                </Link>
            </div>
            )
        }
        </div>

            <div onClick={handleNav} className='block md:hidden cursor-pointer'>  
                {nav? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' /> }
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 
            'w-[40%] h-[150px] bg-black text-white rounded-md  absolute top-[60px] right-0 flex justify-center text-center align ease-in-out duration-300' 
            :
            "absolute right-[100%]"}>

                {user?.email ? (
                <div className='flex flex-col gap-2 sm:pt-[10%] pt-[20%]'>
                <Link to='/account'>
                    <button className='text-white pr-4' >Account</button>
                </Link>

                    <button onClick={handleLogout} className=' bg-red-600 sm:px-6 py-2 rounded cursor-pointer text-white' >Log out</button>
            </div>
            ) : (
                <div>
                <Link to='/login'>
                    <button className='text-white mr-2 p-2 ease-in-out duration-300 hover:text-[#d2d2d2]' >Sign In</button>
                </Link>
                <Link to='/singup'>
                    <button className='bg-red-600 px-4 py-2 sm:px-6 rounded cursor-pointer text-white ease-in-out duration-300 hover:bg-red-500' >Sign Up</button>
                </Link>
            </div>
            )
        }
            </div>
            
        </div>
    )
}

export default Navbar