import { useState } from 'react'
import { Link } from 'react-router-dom'

export default () => {
    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" }, // Example path
        { title: "Contact Us", path: "/contact" },
        { title: "Register", path: "/register" } // Example path
    ]

    return (
        <header>
            <nav className="relative items-center py-5 px-4 mx-auto max-w-screen sm:px-8 sm:flex sm:space-x-6 shadow-md rounded-2xl ">
                <div className="flex justify-between md:mx-40 items-center ml-6">
                    <Link to="/" className='font-bold bg-gradient-to-r text-transparent text-center text-3xl bg-clip-text from-purple-700 via-purple-600 to-purple-500'>
                        JANATA SERVICES
                    </Link>

                    <button className="text-gray-500 outline-none sm:hidden"
                        onClick={() => setState(!state)}
                    >
                        {
                            state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (

                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>
                <ul className={`bg-white shadow-md rounded-md p-4 flex-1 mt-12 absolute z-20 top-8 right-4 w-64 border sm:shadow-none sm:block sm:border-0 sm:mt-0 sm:static sm:w-auto ${state ? '' : 'hidden'}`}>
                    <div className="order-1 justify-end items-center space-y-5 sm:flex sm:space-x-6 sm:space-y-0">
                        {
                            navigation.map((item, idx) => (
                                <li className="text-gray-500 hover:text-purple-600 text-xl" key={idx}>
                                    <Link to={item.path}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </div>
                </ul>
            </nav>
        </header>
    )
}
