import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import my_projects from '../assets/Data/my_projects'
import ProjectItem from "./ProjectItem";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  }, [])

  return (
    <div id="Projects" className="py-20 lg:px-36 px-5">
      <h1 data-aos="zoom-in-down" className="text-[52px] font-semibold mb-20 leading-normal text-center uppercase text-blue-400">My Selected Projects</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        centeredSlides
        loop
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Keyboard]}
        keyboard={true}
        className="slider pb-10 flex justify-center items-center" 
        data-aos="zoom-in-up"
      >
        {
          my_projects.map((proj) => {return (
            <SwiperSlide key={proj.id}>
              <ProjectItem title={proj.title} techs={proj.techs} date={proj.date} github={proj.github} algs={proj.algs} desc={proj.desc}/>
            </SwiperSlide> 
          )})
        }
      </Swiper>
    </div>
  )
}

export default Projects
