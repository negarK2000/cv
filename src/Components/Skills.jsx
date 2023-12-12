import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Skills = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  }, [])

  return (
    <div data-aos="" id="Skills" className="lg:p-32 p-5 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-emerald-400">My Technical Skills</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 justify-around gap-14">
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 h-28 w-44 rounded-tr-3xl rounded-bl-3xl border-2 border-emerald-700">C</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">Java</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">Python</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">Go</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">HTML5</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">CSS3</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">Javascript</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">React</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">Bootstrap</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">Tailwind CSS</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">SQL</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">Postgresql</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">Redis</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">VHDL</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">Verilog</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">REST API</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">GraphQL</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">Wireshark</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">Ping Plotter</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">Postman</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">VMware Workstation</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">Docker</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">Arduino</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">Proteus</h2>
        <h2 data-aos="fade-left" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tr-3xl rounded-bl-3xl h-28 w-44 border-2 border-emerald-700">OrCAD</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">Modelsim</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">Xilinx ISE</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">MATLAB</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">Git</h2>
        <h2 data-aos="fade-right" className="box_glow text-center text-[26px] flex items-center justify-center font-semibold text-emerald-700 rounded-tl-3xl rounded-br-3xl h-28 w-44 border-2 border-emerald-700">LATEX</h2>
      </div>
    </div>
  )
}

export default Skills
