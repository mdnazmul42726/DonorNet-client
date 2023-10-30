
const Root = () => {
    return (
        <div>
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

            {/* hero */}
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/Ltgsjn7/pexels-kirill-dratsevich-12227661.jpg')] ">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-6xl font-bold text-red-900 opacity-100">Donate Blood, Save Life</h1>
                        <p className="text-xl mt-4 text-red-900 font-semibold">Donating blood is the simplest way to save a life. <br /> Your gift of life can bring hope and healing to those in need</p>
                        <button className="btn bg-red-600 px-5 hover:bg-red-700 border-0 rounded-sm mt-6 text-white mr-4">Donate</button>
                        <button className="btn bg-red-600 px-5 border-0 hover:bg-red-700 rounded-sm mt-6 text-white">Make an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;