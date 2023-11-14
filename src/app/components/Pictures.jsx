import Image from 'next/image'
import React from 'react'

const Pictures = () => {
  return (
    <div className='w-[60%] mx-auto lg:w-full'>
      <div className='flex gap-3 w-full p-3 justify-center'>
      <Image src='/kwen.jpg' width={200} height={200} className='rod' alt='me'/>
      <Image src='/leke.jpg' width={200} height={200} className='rod' alt='leke'/>
      <Image src='/kwen.jpg' width={200} height={200} className='rod' alt='kwen'/>
      <Image src='/tony.jpg' width={200} height={200} className='rod' alt='tony'/>
      <Image src='/dola.jpg' width={200} height={200} className='rod' alt='dola'/>
      </div>
    </div>
  )
}

export default Pictures
