import {AiFillGithub} from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { SiSkypeforbusiness } from "react-icons/si"
import img from "../assets/logo-no-background.png"

const Footer = () => {
  return (
    <footer className="bg-violet-950 bg-opacity-75 text-sky-200 lg:px-48 px-4 py-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="mb-4 md:mb-0 flex items-center flex-1">
          <img src={img} width={150} className="rounded-full" alt="logo photo"/>
          {/* <p className="text-[16px] my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, modi. Quod ab dolorem impedit. Veniam delectus cumque voluptas facilis quae odit tenetur officia aspernatur! Omnis corrupti quod fugiat veritatis distinctio!</p> */}
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-sky-300 py-2 upppercase">Services</h2>
          <ul className="text-[16px] my-4 ">
            <li className="my-2">Front-end & Back-end Development</li>
            <li className="my-2">Software Development</li>
            <li className="my-2">Database Design</li>
            <li className="my-2">IoT Platform and Embedded Development</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-3xl text-center font-semibold text-sky-300 py-2 upppercase">Contact & Follow Me</h2>
          <div className="flex justify-center space-x-4">
            <a href="mailto:n2000karami@gmail.com" className="text-sky-200 hover:text-sky-400 transition-all duration-150 ease-in-out rounded-full p-2" title='n2000karami@gmail.com' onClick={()=> navigator.clipboard.writeText('n2000karami@gmail.com')}>
              <BiLogoGmail className="text-[28px]"/>
            </a>
            <a href="https://join.skype.com/invite/oLswxYZss8or" title="join.skype.com/invite/oLswxYZss8or" className="text-sky-200 hover:text-sky-400 transition-all duration-150 ease-in-out rounded-full p-2 ">
              <SiSkypeforbusiness className="text-[28px]"/>
            </a>
            <a href="https://github.com/negarK2000" title="github.com/negarK2000" className="text-sky-200 hover:text-sky-400 transition-all duration-150 ease-in-out rounded-full p-2 ">
              <AiFillGithub className="text-[28px]"/>
            </a>
            <a href="https://www.linkedin.com/in/n2000karami" title="www.linkedin.com/in/n2000karami" className="text-sky-200 hover:text-sky-400 transition-all duration-150 ease-in-out rounded-full p-2 ">
              <FaLinkedin className="text-[28px]"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
