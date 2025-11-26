import { ArrowUp } from 'lucide-react'; 
import Header from './Header'
import React from 'react';
import { FaMagic, FaFileAlt, FaPalette, FaSearch } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
   SiTesla,
  SiGoogle,
  SiAmazon,

  SiMeta,
  SiAdobe,
  SiLinkedin,
  SiApple,
  SiFacebook,
  SiNetflix
} from "react-icons/si";



function Home() {
   const logos = [
      { icon: <SiApple size={60} /> },
  { icon: <SiTesla size={60} /> },
  { icon: <SiGoogle size={60} /> },
  { icon: <SiAmazon size={60} /> },
 // Microsoft alternative
  { icon: <SiMeta size={60} /> },
  { icon: <SiAdobe size={60} /> },
  { icon: <SiLinkedin size={60} /> },
  { icon: <SiFacebook size={60} /> },
  { icon: <SiNetflix size={60} /> },
  ];
  const features = [
    {
      icon: <FaMagic className="text-5xl text-purple-500" />,
      title: "Powerful resume builder",
      desc: "Use our potent creation tools and expert guidance to create the perfect resume for your next job application.",
    },
    {
      icon: <MdPerson className="text-5xl text-purple-500" />,
      title: "Professional templates",
      desc: "Choose from 25+ applicant tracking systems (ATS)-friendly modern and professional templates.",
    },
    {
      icon: <FaPalette className="text-5xl text-purple-500" />,
      title: "Customize fonts and colors",
      desc: "Select custom fonts and colors on any resume template.",
    },
    {
      icon: <FaFileAlt className="text-5xl text-purple-500" />,
      title: "Free resume examples",
      desc: "Use our more than 500 resume examples and templates to see what a great resume looks like in your field.",
    },
    {
      icon: <AiOutlineFileText className="text-5xl text-purple-500" />,
      title: "ATS-friendly templates",
      desc: "Sail through applicant tracking systems with resume templates that appeal to both machines and humans.",
    },
    {
      icon: <FaSearch className="text-5xl text-purple-500" />,
      title: "Expert tips and guidance",
      desc: "Get help every step of the way as you build your resume with expert tips and suggested phrases.",
    },
  ];
  return (
    <div style={{backgroundColor:'#CBC7C7'}}  className="bg-gray-50 min-h-screen">
      <Header/>
      <div  >
        
     
        <section className="z-50">
          <div className="py-8 px-4 mx-auto  max-w-screen-xl text-center lg:py-16 lg:px-12">
            
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              Build Your Resume <span style={{color:"#9450FF"}} className='text-primary'>With AI</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
              Effortlessly Craft a Standout Resume with Our AI-Powered Builder
            </p>

            <div className=" mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a 
                href="/dashboard" 
                style={{backgroundColor:"#9450FF"}} 
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg hover:bg-fuchsia-600 focus:ring-4 focus:ring-fuchsia-300 transition duration-150"
              >
                Get Started
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            
              <div   className="mt-10 w-full max-w-3xl mx-auto">
                <div style={{backgroundColor:'#CBC7C7'}} className="flex flex-wrap sm:flex-nowrap justify-center bg-white ">
                  

                  <div className="p-5 sm:p-6 md:p-8 border-r-2 border-dashed border-pink-300 flex flex-col justify-center 
 w-full sm:w-1/3 min-w-[160px] max-w-full">
                      
                      <div className="flex items-center text-4xl sm:text-5xl font-extrabold leading-none text-fuchsia-700">
                       
                          <ArrowUp className="w-8 h-8 sm:w-10 sm:h-10 mr-1 text-fuchsia-700" strokeWidth={3} />
                          
                          <span className="text-fuchsia-700">38%</span>
                      </div>
                      
                      <p className="mt-3 text-lg font-medium text-fuchsia-700">
                          more interviews
                      </p>
                  </div>

                 
                  <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center w-full sm:w-1/3
                  min-w-[160px] max-w-full">
                      
                      <div className="flex items-center text-4xl sm:text-5xl font-extrabold leading-none text-fuchsia-700">
                        
                          <ArrowUp className="w-8 h-8 sm:w-10 sm:h-10 mr-1 text-fuchsia-700" strokeWidth={3} />

                          <span className="text-fuchsia-700">23%</span>
                      </div>
                      
                      <p className="mt-3 text-lg font-medium text-fuchsia-700">
                          more likely to get a job offer
                      </p>
                  </div>

                </div>
              </div>
    
            </div> 
          </div>
           
           <div>

           </div>

        </section>

            <section style={{backgroundColor:'#CBC7C7'}} className="w-full bg-white overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Subscribers have been hired by: *
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-20 animate-scroll whitespace-nowrap">
          {logos.map((item, index) => (
            <div key={index} className="text-black opacity-80 hover:opacity-100 transition">
              {item.icon}
            </div>
          ))}
       
          {logos.map((item, index) => (
            <div key={`dup-${index}`} className="text-black opacity-80 hover:opacity-100 transition">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </section>

     <section className="max-w-7xl mx-auto px-5 py-24 text-center">
      <h1 className="text-3xl lg:text-5xl font-semibold mb-4">
        Get hired 36% faster with our feature-packed and
      </h1>
      <h2 className="text-3xl lg:text-5xl font-semibold mb-12">
        easy-to-use resume builder app
      </h2>

      <p className="text-gray-600 text-lg mb-20 max-w-4xl mx-auto">
        ResumeBuilder.com is now part of Bold LLC. For more information visit our{" "}
        <span className="underline cursor-pointer">Terms of Use</span> and{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>.
      </p>

   
      <div className="grid md:grid-cols-3 gap-30 text-left ">
        {features.map((item, index) => (
          <div key={index} className="flex gap-8">
            <div>{item.icon}</div>
            <div>
              <h3 className="font-semibold text-4xl mb-3">{item.title}</h3>
              <p className="text-gray-700 text-2xl leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <Link
          to="/dashboard"
          className="bg-purple-500 text-white text-lg font-medium px-10 py-4 rounded-xl shadow-md hover:bg-purple-600 transition"
        >
          Create Your Resume
        </Link>
      </div>
    </section>

      </div>
    </div>
  );
}

export default Home;