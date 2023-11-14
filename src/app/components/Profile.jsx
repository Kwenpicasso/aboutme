import { User2, UserCircle2Icon } from 'lucide-react'
import React from 'react'

const Profile = () => {
  return (
    <div className='w-[60%] mx-auto flex flex-col gap-3 lg:w-full'>
      <div className='flex gap-3'>
        <UserCircle2Icon className='text-red-500'/>
        <h1 className='font-semibold  animate-pulse'>Profile</h1>
      </div>
      <p className='text-sm sm:text-xs '>
      Experienced Frontend developer with expertise in HTML, Tailwind CSS, React, Next.js, and Framer Motion. Proven track record for developing user experience solutions leveraging the latest technologies and tools. Seeking a position as a Frontend Developer to create and maintain high-quality, engaging web experiences.
      </p>
    </div>
  )
}

export default Profile
