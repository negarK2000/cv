import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_ii3lii1', 'template_jqocsh9', event.target, 'PGp7RVn8jr8fmApqp')
    .then((result) => {
      alert(result.text);
      event.target.name.value = ""
      event.target.mail.value = ""
      event.target.message.value = ""
    }, (error) => {
      alert(error.text);
    });
  }

  return (
    <div data-aos="flip-right" id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 className="text-[52px] font-semibold mb-8 leading-normal text-indigo-500 uppercase">Contact with Me</h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2" onSubmit={handleSubmit}>
        <div className="lg:flex gap-9">
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-indigo-800 text-xl text-slate-300 area_glow" placeholder="Enter Your Name" name="name" type="text"/>
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-indigo-800 text-xl text-slate-300 area_glow" placeholder="Enter Your Email" name="mail" type="email"/>
        </div>
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-indigo-800 text-xl text-slate-300 area_glow" placeholder="Write Your Message" name="message" cols={20} rows={8}/>
        <button type="submit" className="neno-submit shadow-xl hover:shadow-indigo-800/50 text-white border-2 border-indigo-800 hover:bg-indigo-800 rounded-lg py-3 px-8 uppercase overflow-hidden text-xl text-bold mb-10 my-6 area_glow">Submit</button>
      </form>
    </div>
  )
}

export default Contact
