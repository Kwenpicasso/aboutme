import { Briefcase } from 'lucide-react'
import React from 'react'

const Work = () => {
  return (
    <div className='w-[60%] mx-auto lg:w-full flex flex-col gap-1'>
        <div className='flex gap-3'>
        <Briefcase className='text-red-500'/>
        <h1 className='font-semibold capitalize animate-pulse'>work experience</h1>
      </div> 
      <h1 className='capitalize text-red-500 text-sm'>full stack web development trainee</h1>
      <div className='w-full flex justify-between text-sm'>
        <h1>NIIT</h1>
        <h1 className='capitalize'>may 2022- april2023, lagos, nigeria</h1>
      </div>
      <p className='text-sm sm:text-xs'>• Collaborated with a team of developers to design, build, and maintain web applications using a range of technologies, including HTML, CSS, JavaScript, XML, PHP, and MySQL <br />
• Built responsive and visually appealing user interfaces using HTML and CSS to enhance the overall user experience. <br />
• Utilized JavaScript to create interactive and dynamic features, improving website functionality and user <br />
• Designed and implemented database solutions using MySQL to store and manage data efficiently. <br />
• Worked with XML for data interchange and integration within the web applications.</p>
      
    </div>
  )
}

export default Work
