import {AiFillGithub} from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import img from "../assets/photo.jpg"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  }, [])

  return (
    <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-16 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] text-blue-200 font-semibold mb-8 leading-normal">Hi, I'm <span className="text-blue-500 uppercase">Negar Karami</span></h1>
        <p data-aos="fade-left" className="text-blue-200 text-[18px]">I'm a passionate full-stack and software developer with a love for creating and bringing ideas to life through code. From the moment I wrote my first line of code in September 2018, I knew I had discovered my true calling. Programming gives me the power to build worlds and turn my imagination into reality. I thrive on the constant learning and challenges that come with this dynamic field. I have a wide range of knowledge in computer engineering and science, but my primary focus has been on Software Engineering and Development, web development, Computer Networks, Embedded Systems and Internet of Things. I believe in writing clean, maintainable code and enjoy finding elegant solutions to intricate problems. I'm excited to embark on new opportunities, tackle new projects, and contribute to the ever-evolving tech landscape.</p>
        <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
                <div data-aos="fade-up" className="flex space-x-2">
                    <a href="https://github.com/negarK2000" title="https://github.com/negarK2000" className="text-blue-500 hover:text-blue-400 rounded-full glow p-2 ">
                      <AiFillGithub className="text-[35px]"/>
                    </a>
                    <a href="https://www.linkedin.com/in/n2000karami" title="https://www.linkedin.com/in/n2000karami" className="text-blue-500 hover:text-blue-400 rounded-full glow p-2 ">
                      <FaLinkedin className="text-[35px]"/>
                    </a>
                </div>
            </div>
        </div>
      </div>
      <img data-aos="fade-up" src={img} width={230} className="rounded-md border-2 border-blue-500 img_glow" alt="Profile photo"/>
    </div>
  )
}

export default Banner
