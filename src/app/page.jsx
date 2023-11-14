import Education from "./components/Education";
import Header from "./components/Header";
import Pictures from "./components/Pictures";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Work from "./components/Work";



export default function Home() {
  return (
    <div className="w-full h-screen p-[5%]">
     <Header/>
     <div className="w-[70%] mx-auto h-[2px] bg-gray-300 my-3 lg:w-full"></div>
     <Profile/>
     <div className="w-[70%] mx-auto h-[2px] bg-gray-300 my-3 lg:w-full"></div>
     <Work/>
     <div className="w-[70%] mx-auto h-[2px] bg-gray-300 my-3 lg:w-full"></div>
     <Education/>
     <div className="w-[70%] mx-auto h-[2px] bg-gray-300 my-3 lg:w-full"></div>
     <Skills/>
     <div className="w-[70%] mx-auto h-[2px] bg-gray-300 my-3 lg:w-full"></div>
     <Pictures/>
    </div>
  )
}
