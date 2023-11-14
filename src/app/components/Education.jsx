import { School } from 'lucide-react'
import React from 'react'

const Education = () => {
  return (
    <div className='w-[60%] mx-auto lg:w-full flex flex-col gap-2'>
       <div className='flex gap-3'>
        <School className='text-red-500'/>
        <h1 className='font-semibold capitalize animate-pulse'>education</h1>
      </div>
      <div className='w-full flex flex-col text-sm sm:text-xs gap-2'>
        <div>
            <h1 className='font-semibold text-red-500'>Bachelor Degree in Computer Science</h1>
            <h1>Mountain Top University • Nigeria • 2023 • CGPA: 3.73</h1>
        </div>
        <div>
            <h1 className='font-semibold text-red-500'>Diploma in Full Stack Web Development</h1>
            <h1>NIIT • Nigeria • 2023</h1>
        </div>

      </div>
    </div>
  )
}

export default Education
