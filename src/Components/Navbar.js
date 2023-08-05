import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar() {
    let location = useLocation();
    useEffect(() => {
        // Google Analytics
        console.log("working",location)
      }, [location]);
  return (
    <div>
        <nav className = " relative flex w-full flex-nowrap black items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
            <div className = "flex w-full flex-wrap items-center justify-between px-3">
                <div className = "ml-2">
                    <Link className = "text-xl text-neutral-800 dark:text-neutral-200" to = "/">
                        Navbar
                    </Link>
                </div>
                <button className = "block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"  type="button" data-te-collapse-init data-te-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
                    <span className = "[&>svg]:w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </span>
                </button>
                <div className = "!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto" id="navbarSupportedContent2" data-te-collapse-item>
                    <ul className = "list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
                        <li className = "my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                            <Link className = {`${location.pathname==="/"?"active":""} disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400`} aria-current="page" to="/" data-te-nav-link-ref >
                                Home
                            </Link>
                        </li>
                        <li className = "mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                            <Link className={`${location.pathname==="/about"?"active":""} p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400`} to="/about" data-te-nav-link-ref >
                                About
                            </Link>
                        </li>
                        <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                            <Link className="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400" to="/" data-te-nav-link-ref>
                                Pricing
                            </Link>
                        </li>
                        <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-link-ref>
                            <Link to="/" className="text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
                                Disabled
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)}

export default Navbar
