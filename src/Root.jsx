import wWA from './assets/Screenshot.png';

const Root = () => {
    return (
        <div className='mb-36'>
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

            {/* Who We Are */}
            <div className="mt-10 md:mt-36 w-11/12 mx-auto md:flex gap-36">
                <div className=" md:w-1/2">
                    <img src={wWA} alt="" />
                </div>
                <div className="mt-10 md:mt-0">
                    <p className='text-sky-500 font-mono'>MAKE AN IMPACT</p>
                    <h1 className='text-4xl md:text-5xl font-semibold'>Who We Are</h1>
                    <h1 className='text-xl font-bold text-red-600'>___________</h1>
                    <p className='mt-4  text-xl'>Your financial gift can <br /> <span className='text-sky-500 font-semibold'>help a thousand children</span> who struggle from illnesses. <br /> Your gift can provide the necessary medicine, treatment, and other essentials.</p>
                    <button className="btn bg-red-600 px-5 hover:bg-red-700 border-0 rounded-sm mt-6 text-white mr-4">Donate Now</button>
                </div>
            </div>

            {/* Ways to help */}
            <div className="mt-36">
                <div className="">
                    <div className="text-center">
                        <p className='font-mono text-sky-500'>GET INVOLVED</p>
                        <h1 className='text-4xl md:text-5xl font-semibold'>Ways to help</h1>
                        <h1 className='text-xl font-bold text-red-600'>___________</h1>
                    </div>
                    <div className="w-11/12 mx-auto mt-10 grid grid-cols-3 gap-4">
                        {/* <div className="bg-[url('https://i.ibb.co/vzvqxZb/pexels-frank-meri-o-12193105.jpg')] bg-cover">
                          <div className="mt-60 ml-5">
                            <h1 className='text-3xl font-semibold text-white'>Donate Blood</h1>
                          </div> */}
                        {/* <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src="https://i.ibb.co/vzvqxZb/pexels-frank-meri-o-12193105.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-3xl font-semibold text-white">Donate Blood</h2>
                                <p>Donate blood today. Help save lives.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div> */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <a href="#">
                                <img className="rounded-t-lg h-72" src="https://i.ibb.co/vzvqxZb/pexels-frank-meri-o-12193105.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">Donate Blood</h5>
                                </a>
                                <p className="mb-3 font-normal">Donate blood today. Help save lives.</p>
                                <button className="btn bg-red-600 px-5 hover:bg-gray-400 border-0 rounded-sm mt-6 text-white mr-4">Learn more</button>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <a href="#">
                                <img className="rounded-t-lg h-72 w-96" src="https://i.ibb.co/0MyFDPh/pexels-mikhail-nilov-7465700.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">Volunteer Team</h5>
                                </a>
                                <p className="mb-3 font-normal">We are always looking for your help.</p>
                                <button className="btn bg-red-600 px-5 hover:bg-gray-400 border-0 rounded-sm mt-6 text-white mr-4">Become a Volunteer</button>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <a href="#">
                                <img className="rounded-t-lg w-96 h-72" src="https://i.ibb.co/MkZf7v2/pexels-pixabay-271168.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight">Donate Money</h5>
                                </a>
                                <p className="mb-3 font-normal">Financial gift help people who need it most.</p>
                                <button className="btn bg-red-600 px-5 hover:bg-gray-400 border-0 rounded-sm mt-6 text-white mr-4">Donate now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;