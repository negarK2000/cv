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
    <div id="About" className="lg:px-56 md:px-20 px-5 lg:pb-24 lg:pt-28">
      <div className="lg:py-20 pb-28 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-16 items-center">
        <div className="h-full flex flex-col justify-center lg:items-start items-center text-white">
          <h1 data-aos="fade-right" className="text-[52px] text-blue-200 font-semibold mb-8 leading-normal">Hi, I'm <span className="text-blue-500 uppercase">Negar Karami</span></h1>
          <p data-aos="fade-left" className="text-blue-200 text-[18px]">I am a passionate Computer Engineer with a love for creating and bringing ideas to life through code. My interests span a diverse range of topics, and I possess experience as both a full-stack and software developer. Programming empowers me to build worlds and transform my imagination into reality. I thrive on the continuous learning and challenges inherent in this dynamic field. I am committed to writing clean, maintainable code and derive satisfaction from discovering elegant solutions to intricate problems. I am excited to embark on new opportunities, tackle fresh projects, and contribute to the ever-evolving tech landscape.</p>
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

      <div id="About" className="lg:py-0 py-10 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-16 items-center">
        <div className="h-full flex flex-col justify-center lg:items-start items-center text-white">
          <h1 data-aos="fade-left" className="text-[32px] text-blue-200 font-semibold mb-2 leading-normal text-blue-500"> Exploring Life's Palette </h1>
          <p data-aos="fade-right" className="text-blue-200 text-[18px]"><p className="mb-3 text-[20px]"> When I'm not immersed in programming or studying, you'll find me indulging in my hobbies: <br/></p>
          <p className="hover-bigger mb-1"><b className="text-blue-400">Film Buff:</b> Whether it's a gripping thriller or a heartwarming classic, I find solace in the world of cinema.<br/></p>
          <p className="hover-bigger mb-1"><b className="text-blue-400">Bookworm:</b> Books are my portals to different worlds, as each page holds a key to unlocking new horizons. <br/></p>
          <p className="hover-bigger mb-1"><b className="text-blue-400">Culinary Explorer:</b> I thrive on the excitement of trying new recipes and flavors. The joy of cooking is an art I savor. <br/></p>
          <p className="hover-bigger mb-1"><b className="text-blue-400">Language Artisan:</b> How I learned English? It's a tale of books and movies! <br/></p>
          <p className="hover-bigger mb-1"><b className="text-blue-400">Wanderlust Dreamer:</b> My dream is to traverse the world, immersing myself in diverse cultures and indulging in their cuisines.<br/></p>
          <p className="hover-bigger mb-1"><b className="text-blue-400">Handcraft Aficionado:</b> Whether it's crochet, knitting, or creating art with my hands, I revel in the tactile joy of crafting.<br/></p>
          <p className="hover-bigger mb-1"><b className="text-blue-400">Adventurous Spirit:</b> Biking, mountaineering, and the thrill of exploring nature fuel my adventurous side.<br/></p>
          <p className="hover-bigger mb-1"><b className="text-blue-400">Ballin' with Buddies:</b> Given the chance, you'll catch me on the court, dribbling and shooting hoops with friends.</p></p>
        </div>
      </div>
    </div>
  )
}

export default Banner
