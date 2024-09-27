import wWA from "../assets/Screenshot.png";
import { IoIosArrowForward } from "react-icons/io";
import { BsQuote } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/Ltgsjn7/pexels-kirill-dratsevich-12227661.jpg')] ">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-6xl font-bold text-red-900 opacity-100">
              Donate Blood, Save Life
            </h1>
            <p className="text-xl mt-4 text-red-900 font-semibold">
              Donating blood is the simplest way to save a life. <br /> Your
              gift of life can bring hope and healing to those in need
            </p>
            <button className="btn bg-red-600 px-5 hover:bg-red-700 border-0 rounded-sm mt-6 text-white mr-4">
              Donate
            </button>
            <button className="btn bg-red-600 px-5 border-0 hover:bg-red-700 rounded-sm mt-6 text-white">
              Find Donor
            </button>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="mt-10 md:mt-36 w-11/12 mx-auto md:flex gap-36">
        <div className=" md:w-1/2">
          <img src={wWA} alt="" />
        </div>
        <div className="mt-10 md:mt-0">
          <p className="text-sky-500 font-mono">MAKE AN IMPACT</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Who We Are</h1>
          <h1 className="text-xl font-bold text-red-600">___________</h1>
          <p className="mt-4  text-xl">
            Your financial gift can <br />{" "}
            <span className="text-sky-500 font-semibold">
              help a thousand children
            </span>{" "}
            who struggle from illnesses. <br /> Your gift can provide the
            necessary medicine, treatment, and other essentials.
          </p>
          <button className="btn bg-red-600 px-5 hover:bg-red-700 border-0 rounded-sm mt-6 text-white mr-4">
            Donate Now
          </button>
        </div>
      </div>

      {/* Ways to help */}
      <div className="mt-36">
        <div className="">
          <div className="text-center">
            <p className="font-mono text-sky-500">GET INVOLVED</p>
            <h1 className="text-4xl md:text-5xl font-semibold">Ways to help</h1>
            <h1 className="text-xl font-bold text-red-600">___________</h1>
          </div>
          <div className="w-11/12 mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img
                  className="rounded-t-lg h-72"
                  src="https://i.ibb.co/vzvqxZb/pexels-frank-meri-o-12193105.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    Donate Blood
                  </h5>
                </a>
                <p className="mb-3 font-normal">
                  Donate blood today. Help save lives.
                </p>
                <button className="btn bg-red-600 px-5 hover:bg-red-700 border-0 rounded-sm mt-6 text-white mr-4">
                  Learn more
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img
                  className="rounded-t-lg h-72 w-96"
                  src="https://i.ibb.co/0MyFDPh/pexels-mikhail-nilov-7465700.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    Volunteer Team
                  </h5>
                </a>
                <p className="mb-3 font-normal">
                  We are always looking for your help.
                </p>
                <button className="btn bg-red-600 px-5 hover:bg-red-700 border-0 rounded-sm mt-6 text-white mr-4">
                  Become a Volunteer
                </button>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img
                  className="rounded-t-lg w-96 h-72"
                  src="https://i.ibb.co/MkZf7v2/pexels-pixabay-271168.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    Donate Money
                  </h5>
                </a>
                <p className="mb-3 font-normal">
                  Financial gift help people who need it most.
                </p>
                <button className="btn bg-red-600 px-5 hover:bg-red-700 border-0 rounded-sm mt-6 text-white mr-4">
                  Donate now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ways to help */}
      <div className=" mx-auto mt-36">
        <div className="md:flex w-11/12 mx-auto md:w-full">
          <div className="md:w-1/2 md:ml-10">
            <p className="font-mono text-sky-500">GET INVOLVED</p>
            <h1 className="text-4xl md:text-5xl font-semibold">Ways to help</h1>
            <h1 className="text-xl font-bold text-red-600">___________</h1>
            <p className="my-10 text-xl">
              Blood Center is public donation center with blood donation members
              in the changing health care system. Founded in 1978, Blood Center
              is one of the nation’s oldest and largest nonprofit transfusion
              medicine organizations. We provide a blood and volunteer services
              across the US. With our national footprint, deep community roots
              and specialized services, we are the thread that connects people
              and resources together to fuel progress in transfusion medicine.
            </p>
            <div className="flex gap-10">
              <div className="flex items-center font-semibold">
                <IoIosArrowForward className="text-sky-500 mr-2" />
                <p>Inspiring people to give blood</p>
              </div>
              <div className="flex items-center font-semibold">
                <IoIosArrowForward className="text-sky-500 mr-2" />
                <p>Increasing communication with our members.</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://i.ibb.co/z2dTKRx/pexels-evg-kowalievska-1170979.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/*  */}

      {/* World Blood Donors Day */}
      <div className="mt-36">
        <div className="md:flex w-full gap-20">
          <div className="md:w-1/2">
            <img
              src="https://i.ibb.co/7k5X8f3/pexels-charliehelen-robinson-4531306.jpg"
              alt=""
            />
          </div>
          <div className="md:w-1/2 md:mr-20 mx-5 md:mx-0">
            <h1 className="text-4xl mt-10 md:mt-0 md:text-5xl font-semibold">
              World Blood Donors <br /> Day
            </h1>
            <p className="mt-5 text-xl">
              Every year, on 14 June, countries around the world celebrate World
              Blood Donor Day. The event serves to raise awareness of the need
              for safe blood and blood products and to thank blood donors for
              their life-saving gifts of blood.
            </p>
            <div className="md:flex justify-around">
              <div className="mt-10">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-sky-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <h3 className="font-semibold">Dhaka, Bangladesh</h3>
                </div>
                <div className="flex items-center gap-2 my-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-sky-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>

                  <h3 className="font-semibold">14 June 2025</h3>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-sky-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="font-semibold">9:00 am - 8:00 pm</h3>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="text-xl font-semibold">Register today</h2>
                <form className="mt-5">
                  <input
                    className="pr-16 w-full mb-2 pl-4 py-3 border rounded border-red-600"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your name"
                    required
                  />{" "}
                  <br />
                  <input
                    className="pr-16 mb-2 w-full pl-4 py-3 border rounded border-red-600"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email"
                    required
                  />{" "}
                  <br />
                  <input
                    className="pr-16 mb-2 pl-4 w-full py-3 border rounded border-red-600"
                    type="number"
                    name="number"
                    id=""
                    placeholder="Phone"
                    required
                  />{" "}
                  <br />
                  <input
                    className="btn bg-red-600 px-5 hover:bg-red-700 border-0 rounded text-white mr-4"
                    type="submit"
                    value="Make an Appointment"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className=" mt-36 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="">
          <div className=" p-5 bg-sky-50 border">
            <BsQuote className="text-5xl opacity-75" />
            <p className="text-xl opacity-80">
              People here are friendly every time! Very thorough. Always
              checking on you to make sure you are ok
            </p>
            <div className="flex justify-end">
              <p className="font-bold text-red-600 text-3xl">______</p>
            </div>
            <div className="flex justify-end mt-4">
              <p className="font-semibold text-sky-300">ANDY SIMPSON</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" p-5 bg-sky-50 border">
            <BsQuote className="text-5xl opacity-75" />
            <p className="text-xl opacity-80">
              Just finished donating platelets for the first time in my life and
              I`m so happy I did! I will gladly donate...
            </p>
            <div className="flex justify-end">
              <p className="font-bold text-red-600 text-3xl">______</p>
            </div>
            <div className="flex justify-end mt-4">
              <p className="font-semibold text-sky-300">KRISTY KORTNY</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" p-5 bg-sky-50 border">
            <BsQuote className="text-5xl opacity-75" />
            <p className="text-xl opacity-80">
              Cool - blood goes from one arm, thru a machine, back into other
              arm. Able to split my donation!
            </p>
            <div className="flex justify-end">
              <p className="font-bold text-red-600 text-3xl">______</p>
            </div>
            <div className="flex justify-end mt-4">
              <p className="font-semibold text-sky-300">BARBARA WILKIRSON</p>
            </div>
          </div>
        </div>
      </div>

      {/* Become a Blood Donor */}
      <div className="mt-36">
        <div className="h-96 bg-[url('https://i.ibb.co/jfC3BZW/pexels-frank-meri-o-12193090.jpg')] bg-cover">
          <div className="ml-6 pt-4 md:pt-24">
            <p className="font-bold text-red-600 text-6xl mb-3">______</p>
            <p className="text-5xl font-bold text-white">
              Become a <span className="text-red-500">Blood</span> Donor!
            </p>
            <p className="text-white text-xl mt-2">
              All types of blood are needed to help patients
            </p>
            <button className="btn bg-red-600 px-5 mt-10 hover:bg-red-700 border-0 rounded text-white mr-4">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
