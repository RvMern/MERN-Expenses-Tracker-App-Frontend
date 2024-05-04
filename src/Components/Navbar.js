import React, { useContext} from 'react'
import {Link} from 'react-router-dom'
import { authContext } from './Context/AuthContext/AuthContext'

const Navbar = () => {
  const {state, logoutUserAction} = useContext(authContext);

  const handleMenu = () => {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden')
  }

  return (
    
    <>
      <nav className="bg-slate-200 shadow-xl p-3">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/" className='rounded-full'>
                    <img className='object-cover w-16 h-16 rounded-full' src='/Images/logo.png' alt='logo' />
                    </Link>
                </div>

                <div className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="text-black hover:text-violet-400 font-medium">Home</Link></li>
                        {state?.userAuth === null ? 
                        <>
                          <li><Link to="/login" className="text-black hover:text-violet-400 font-medium">Login</Link></li>
                          <li><Link to="/register" className="text-black hover:text-violet-400 font-medium">Register</Link></li>
                        </> : 
                        <>
                          <li><Link to="/dashboard" className="text-black hover:text-violet-400 font-medium">Dashboard</Link></li>
                          <li onClick={logoutUserAction}><Link  className="text-black hover:text-violet-400 font-medium">Logout</Link></li>
                        </>
                        }
                        
                    </ul>
                </div>


              <div className="md:hidden flex items-center">
                <button id="mobile-menu-button"
                onClick={handleMenu}
                className="text-black focus:outline-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        <div id="mobile-menu" className="mx-4 my-2 text-center
        hidden md:hidden">
            <div className="px-2 py-3 space-y-1">
                <div className='text-black
                w-full mx-auto block py-1'>
                <Link to="/" className="text-black
                inline-block mx-auto font-medium hover:text-violet-500">Home</Link>
                </div>

                {
                  state?.userAuth === null ?
                  <>
                    <div className='text-black
                    w-full mx-auto block py-1'>
                    <Link to="/login" className="text-black
                    inline-block mx-auto font-medium
                  hover:text-violet-500">Login</Link>
                  </div>

                    <div className='text-black
                    w-full mx-auto block py-1'>
                    <Link to="/register" className="text-black
                    inline-block mx-auto font-medium  hover:text-violet-500">Register</Link>
                  </div>
                  </> :
                  <>
                    <div className='text-black
                    w-full mx-auto block py-1 hover:text-violet-500'>
                    <Link to="/dashboard" className="text-black
                    inline-block mx-auto font-medium hover:text-violet-500">Dashboard</Link>
                    </div>
                
                    <div className='text-black
                    w-full mx-auto block py-1'>
                    <Link className="text-black
                    inline-block mx-auto font-medium hover:text-violet-500" 
                    onClick={logoutUserAction}>Logout</Link>
                    </div>
                  </>
                }
            </div>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar