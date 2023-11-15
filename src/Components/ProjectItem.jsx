import { FaSquareGithub } from "react-icons/fa6"
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc"

const ProjectItem = ({title, techs, date, github, algs, desc}) => {
  return (
    <div className="proj_glow h-max lg:w-[40vw] p-6 my-2 text-start rounded-3xl border-2 border-blue-800 css-fix">
        <div className="grid grid-cols-10 mb-3">
            <h2 className="col-start-2 col-end-10 text-sky-400 flex justify-center lg:text-[22px] text-[16px] font-bold text-center">{title}</h2>
            <a href={github} className="col-start-10 col-end-11 text-blue-500 flex justify-end hover:text-blue-400">
                <FaSquareGithub className="text-[28px] rounded icon_glow"/>
            </a>
        </div>
        <p className="text-sky-300 lg:text-[18px] text-[12px] mb-1"><span className="text-sky-500 font-semibold">Date: </span>{date}</p>
        <p className="text-sky-300 lg:text-[18px] text-[12px] mb-1"><span className="text-sky-500 font-semibold">Languages & Technologies: </span>{techs}</p>
        {
            algs.length > 0 &&
            <p className="text-sky-300 lg:text-[18px] text-[12px] mb-1"><span className="text-sky-500 font-semibold">Algorithms & Methods: </span>{
                algs.map((alg) => {
                    return (
                        <span className="flex justify-start ms-3">
                            <VscDebugBreakpointLogUnverified className="text-[20px] rounded icon_glow me-1 mt-1"/> {alg}
                        </span>
                    )
                })
            }</p>
        }
        <p className="text-blue-300 lg:text-[18px] text-[12px]"><span className="text-blue-500 font-semibold">Description:</span><br/>{desc}</p>
    </div>
  )
}

export default ProjectItem
