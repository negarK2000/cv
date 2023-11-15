import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import Education from "./Components/Education"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { useEffect, useState } from "react"
import { Vortex } from "react-loader-spinner"

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, []);

  return (
    <>
      {
        loading ? 
          <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={['#f43f5e', '#8b5cf6', '#6366f1', '#3b82f6', '#06b6d4', '#10b981']}
            />
          </div>
        :
          <div className="bg-slate-900">
            <Nav/>
            <Banner/>
            <Education/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
          </div>
      }
    </>
  )
}

export default App
