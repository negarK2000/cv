import img from "../assets/about.jpg"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Education = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  }, [])
  
  return (
    <div id="Education" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-16 items-center">
      <img data-aos="fade-right" src={img} width={230} className="rounded border-2 border-rose-500 img2_glow" alt="Profile photo"/>

      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-8 leading-normal text-rose-600 uppercase">My Education</h1>
        <h2  data-aos="fade-left" className="text-rose-700 font-semibold text-[28px]">B.Sc Computer Engineering</h2>
        <h2  data-aos="fade-left" className="text-rose-800 text-[20px] mb-3">Amirkabir University of Technology - Department of Computer Engineering</h2>
        <p data-aos="fade-left" className="text-rose-200 text-[18px]">I am a dedicated Computer Engineer, graduted with a 3.79/4 GPA and honored as one of the top-ranking students at my university. Throughout my educational journey, I delved into a diverse range of courses, acquiring a solid foundation in various specialized areas of computer engineering and computer science. As for advanced courses in my undergraduate studies, I focused more on network and AI. <br /> My journey began with a fondness for math and problem-solving, but I couldn't see myself pursuing math alone. That's when I stumbled upon programming during my university studies, and it opened up a whole new world of possibilities. I quickly immersed myself in it, dedicating my time to mastering the craft. Over the past four years, I've faced challenges and overcome obstacles that have only deepened my passion for this field. I've learned more than I could have ever imagined, and yet, I'm constantly driven to learn and grow further.</p>
        <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
                <div data-aos="fade-up" className="flex space-x-2">
                  <a href="https://drive.google.com/file/d/1FnmMhh10TsnHx4992L6bEr_vpFXs5Dqm/view?usp=sharing">
                    <button className="neno-button shadow-xl hover:shadow-rose-800/50 text-white border-2 hover:bg-rose-800 border-rose-800 rounded-lg py-3 px-6 uppercase relative overflow-hidden">Download My CV</button>
                  </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Education
