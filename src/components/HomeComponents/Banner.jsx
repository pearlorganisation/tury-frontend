import "../../index.css"
import { RiArrowDropDownLine } from "react-icons/ri";
import backgroundImage from "../../assets/home/mountains.jpg" 
import logo from "../../assets/logo/logo.png"

function Banner() {
  return (
    <div className="relative font-serif text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage || "/placeholder.svg"} alt="Swiss Alps" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-800/60"></div> {/* Dark overlay */}
      </div>

      {/* Top Bar */}
      <div className="relative z-10  py-3 px-6 flex justify-between items-center text-sm">
        <div>
          <span>RUE DE LAUSANNE, 1202 GENÈVE, SWITZERLAND</span>
        </div>
        <div className="flex space-x-8">
          <span>TEL: +41 22 345 67 88</span>
          <span>FAX: +41 22 345 67 89</span>
          <span>BOOKING@COZYSTAY.COM</span>
        </div>
      </div>

      {/* Navigation and Logo */}
      <div className="relative z-10 flex justify-between items-center px-6 py-6">
        {/* Left Navigation */}
        <nav className="flex space-x-4 text-sm">
          <div className="group relative flex cursor-pointer">
            <span className="uppercase font-light tracking-wider">Reserve</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <div className="group relative flex cursor-pointer">
            <span className="uppercase font-light tracking-wider">us</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <div className="group relative flex cursor-pointer">
            <span className="uppercase font-light tracking-wider">services</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <div className="group relative flex cursor-pointer">
            <span className="uppercase font-light tracking-wider">Rates</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <div className="cursor-pointer">
            <span className="uppercase font-light tracking-wider">Experiences</span>
          </div>
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <img src={logo} alt="" className="ml-5" />
          <h1 className="text-4xl tracking-widest font-light">TURYHOST</h1>
          <div className="flex justify-center mt-1 space-x-1">
            <span className=" text-yellow-400 ">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-4 text-sm">
          <div className="group relative flex cursor-pointer">
            <span className="uppercase font-light tracking-wider">Blog</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <div className="group relative flex  cursor-pointer">
            <span className="uppercase font-light tracking-wider">En</span>
            <span className="ml-1 pt-1"><RiArrowDropDownLine /></span>
          </div>
          <button className="border border-white px-6 py-3 uppercase text-sm tracking-wider hover:bg-white hover:text-slate-800 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-32 pb-64 px-4">
        <div className="uppercase tracking-widest text-sm mb-6">Comprehensive Management | Online Management | Cleaning and Check-in</div>
        <h2 className="text-5xl font-light tracking-wider leading-tight uppercase">
        Management and marketing of <br/> <span className="text-[#e4c7a5] text-7xl">TOURIST APARTMENTS</span><br/> in Barcelona
          
        </h2>
      </div>
    </div>
  )
}

export default Banner
