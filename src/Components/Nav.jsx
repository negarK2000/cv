import { useState } from "react";
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import img from "../assets/logo-no-background.png"

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
   
  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right bg-violet-600 transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Services">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Services</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
        </Link>
      </ul>
    </div>
  </>

  return (
    <nav className="sticky top-0 bg-violet-600 bg-opacity-25 z-50">
      <div className="h-10vh flex justify-between z-50 text-sky-300 lg:py-1 px-20 py-1 border-b border-b-2 border-violet-600">
        <div className="flex items-center flex-1">
          <img src={img} width={50} className="rounded-full" alt="logo photo"/>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px] py-3">
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-violet-500 transition hover:border-b-2 hover:border-violet-500 cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="Education">
                <li className="hover:text-violet-500 transition hover:border-b-2 hover:border-violet-500 cursor-pointer">Education</li>
              </Link>
              <Link spy={true} smooth={true} to="Skills">
                <li className="hover:text-violet-500 transition hover:border-b-2 hover:border-violet-500 cursor-pointer">Skills</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-violet-500 transition hover:border-b-2 hover:border-violet-500 cursor-pointer">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-violet-500 transition hover:border-b-2 hover:border-violet-500 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        
        <div>
          {click && content}
        </div>

        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes/>: <CiMenuFries/>}
        </button>
      </div>
    </nav>
  )
}

export default Nav
