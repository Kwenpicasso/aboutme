import { Laptop } from 'lucide-react'
import React from 'react'

const Skills = () => {
  return (
    <div className='w-[60%] mx-auto lg:w-full flex flex-col gap-2'>
      <div className='flex gap-3'>
        <Laptop className='text-red-500'/>
        <h1 className='font-semibold capitalize animate-pulse'>skills</h1>
      </div>
      <div className='text-sm sm:text-xs'>
      <h1>•HTML</h1>
      <h1>•TAILWIND CSS</h1>
      <h1>•REACT JS</h1>
      <h1>•NEXT JS</h1>
      <h1>•SANITY(Headless cms)</h1>
      </div>
    </div>
  )
}

export default Skills
