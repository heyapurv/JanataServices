import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

// Avtar with darpdown menu
const AvatarMenue = () => {

    const [state, setState] = useState(false)
    const profileRef = useRef()

    const navigation = [
        { title: "Dashboard", path: "javascript:void(0)" },
        { title: "Analytics", path: "javascript:void(0)" },
        { title: "Profile", path: "javascript:void(0)" },
        { title: "Settings", path: "javascript:void(0)" },
    ]


    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

   
}

export default () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Register", path: "/register" },
    ]

 


    return (
        <header className="text-base lg:text-sm   ">
            <div className={`bg-gray-100 shadow-md items-center   px-4 max-w-screen-3xl mx-auto lg:flex lg:px-8 lg:static ${state ? "h-full  inset-x-0" : ""} relative`}>
                <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                    <Link to="/">
                        <span className="text-4xl font-bold md:mx-5 text-center text-purple-500">Janata Services</span>
                    </Link>
                    <div className="lg:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>

                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${state ? "" : "hidden"}`}>
                    <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
                        <form onSubmit={(e) => e.preventDefault()} className='flex-1 items-center justify-start pb-4 lg:flex lg:pb-0'>
                            <div className="flex items-center gap-1 px-2 border rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                                />
                            </div>
                        </form>
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <Link to={item.path} className="block text-gray-700 hover:text-gray-900">
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <AvatarMenue />
                    </ul>
                </div>
            </div>
           
        </header>
    )
}