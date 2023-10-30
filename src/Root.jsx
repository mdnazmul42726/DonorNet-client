import { Outlet } from 'react-router-dom';

const Root = () => {
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
                            <li><a>Home</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <h1 className="text-2xl font-bold">Donor<span className="text-red-600">Net.</span></h1>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>About Us</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
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