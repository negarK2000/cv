import img from "../assets/about.jpg"
import proj from "../assets/project.png"
import { SiPostgresql } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { SiBootstrap } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
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
    <div id="Education" className="lg:px-56 md:px-20 px-5 lg:py-24">
      <div className="lg:py-20 py-10 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-16 items-center">
        <img data-aos="fade-right" src={img} width={230} className="rounded border-2 border-rose-500 img2_glow" alt="Profile photo"/>

        <div className="h-full lg:py-10 flex flex-col justify-center lg:items-start items-center text-white">
          <h1 data-aos="fade-down" className="text-[52px] font-semibold mb-8 leading-normal text-rose-600 uppercase">My Education</h1>
          <h2  data-aos="fade-left" className="text-rose-700 font-semibold text-[28px]">B.Sc Computer Engineering</h2>
          <h2  data-aos="fade-left" className="text-rose-800 text-[20px] mb-3">Amirkabir University of Technology - Department of Computer Engineering</h2>
          <p data-aos="fade-left" className="text-rose-200 text-[18px]">I am a Computer Engineer, graduated with <b className="text-red-800"> a 3.8/4 GPA, and was honored as one of the top-ranking students</b> at my university. Throughout my educational journey, I delved into a diverse range of courses, acquiring a solid foundation in various specialized areas of computer engineering and computer science. In my undergraduate studies, I focused more on advanced courses in AI, network, and software. Additionally, I<b className="text-red-800"> served as a teaching assistant for seven different courses</b> during my studies.</p>
          <div className="flex mt-8 gap-2">
              <div className="flex items-center justify-center">
                  <div data-aos="fade-left" className="flex space-x-2">
                    <a class="urllink"  href="https://drive.google.com/file/d/1RRvQfX7Cn6OQNBzpPq62UJTNU4q8bHY0/view?usp=sharing">
                      <button className="neno-button shadow-xl hover:shadow-rose-800/50 text-white border-2 hover:bg-rose-800 border-rose-800 rounded-lg py-3 px-6 uppercase relative overflow-hidden">Download My CV</button>
                    </a>
                  </div>
              </div>
          </div>
        </div>
      </div>

      <div className="lg:py-0 py-10 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-16 items-center">
        <div className="h-full lg:py-10 flex flex-col justify-center lg:items-start items-center text-white">
          <h1 data-aos="fade-right" className="text-sky-600 font-semibold text-[28px]">My Bachelor's Thesis</h1>
            <h2  data-aos="fade-right" className="text-green-500 font-semibold text-[28px]">Design and implementation of a financial management system for savings funds</h2>
          <p data-aos="fade-right" className="text-green-200 text-[18px]">In response to financial challenges, a family/apartment savings fund was created as an alternative to high-interest loans. Yet, managing these funds proved complex and time-consuming, necessitating professional accountants. To address these challenges, <b className="text-green-700"> I developed a web application that automates savings fund operations, streamlining financial transactions, eliminating the need for experts, and fostering a user-friendly environment.</b> This innovative solution offers a distinct structure from existing software, tailored for widespread public use across various segments of society. <b className="text-green-700">The web app design entailed analyzing market competitors to identify and address their weaknesses.</b><br/>With separate interfaces for administrators and members, The administrator interface facilitates swift fund management decisions, providing a straightforward view of fund account information. The members' interface allows easy account management, ensuring flexibility aligned with fund manager decisions. The implementation leverages the React.js framework for the user interface and the Go language for the server. <b className="text-green-700">Rigorous testing, utilizing the Go language internal test framework, covers over 81% of the program, ensuring quality and correct performance in all scenarios.</b></p>
          <div className="flex gap-2 mt-8 lg:flex-row flex-col">
            <div className="flex items-center justify-center">
                <div data-aos="fade-right" className="flex space-x-2">
                  <a class="urllink"  href="https://github.com/negarK2000/Presentation/blob/master/SavingsFundsManagementSystems/SavingsFundsManagementSystems_Presentation.pdf">
                    <button className="logo_glow shadow-xl hover:shadow-sky-600/50 text-white border-2 hover:bg-sky-600 border-sky-600 rounded-lg py-3 px-6 uppercase relative overflow-hidden">My Presentation Slides</button>
                  </a>
                </div>
            </div>
            <div data-aos="fade-left" className="flex justify-center space-x-4 text-sky-600 text-[45px] my-3 ms-10">
              <FaGolang />
              <FaReact />
              <SiBootstrap />
              <SiPostgresql />
              <SiRedis />
            </div>
          </div>
        </div>

        <img data-aos="fade-left" src={proj} width={260} className="lg:pb-80" alt="Project Logo"/>
      </div>
    </div>
  )
}

export default Education
