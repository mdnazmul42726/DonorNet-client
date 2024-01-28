import { NavLink, Outlet } from 'react-router-dom';

const Root = () => {
    const user = false

    return (
        <div className=''>
            {/* navbar */}
            <div className="navbar bg-base-100 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 font-semibold" : "font-semibold"}>Home</NavLink>
                            <NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 font-semibold" : "font-semibold"}>Blog</NavLink>
                            <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 font-semibold" : "font-semibold"}>About</NavLink>
                            <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 font-semibold" : "font-semibold"}>Contact</NavLink>
                        </ul>

                    </div>
                    <h1 className="text-2xl font-bold">Donor<span className="text-red-600">Net.</span></h1>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex items-center gap-3">
                        <ul className="flex gap-3">
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 font-semibold" : "font-semibold"}>Home</NavLink>
                            <NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 font-semibold" : "font-semibold"}>Blog</NavLink>
                            <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 font-semibold" : "font-semibold"}>About</NavLink>
                            <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 font-semibold" : "font-semibold"}>Contact</NavLink>
                        </ul>

                    </div>
                    {user ? <div className="dropdown ml-3 dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li><a className="justify-between">Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> :
                        <div className="flex">
                            <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 font-semibold ml-3" : "font-semibold ml-3"}>Login</NavLink>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                            </svg>

                        </div>}

                </div>
            </div>

            {/* OutLet */} <Outlet /> {/* OutLet */}

            {/* footer */}
            <div className="">

                <footer className="bg-gray-900 w-full">
                    <div className=" p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <h1 className="text-2xl text-white font-bold">Donor<span className="text-red-600">Net.</span></h1>

                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li>
                                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                                </li>
                                <li>
                                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">DonorNet</a>. All Rights Reserved.</span>
                        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 uppercase mt-5">Developed by <a href='https://github.com/mdnazmul42726' target='_blank' className="hover:underline">SHEIKH MOHAMMAD NAZMUL H.</a></span>
                    </div>
                </footer>


            </div>
        </div>
    );
};

export default Root;