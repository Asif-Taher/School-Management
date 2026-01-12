import Image from 'next/image'
import React from 'react'

const navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 ring-[1.5px] ring-gray-300 px-2 rounded-full">
        <Image src="/search.png" alt="search" width={20} height={20} />
        <input type="text" placeholder='search...' className='bg-transparent w-[200px] p-2 outline-none'/>
      </div>
      {/* icon and user info */}
      <div className='flex justify-end items-center gap-6 w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
            <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
            <Image src="/announcement.png" alt="message" width={20} height={20} />
            <div className='absolute -top-3 -right-3 rounded-full bg-purple-500 w-5 h-5 flex items-center justify-center text-white text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
            <span className='text-xs leading-3 font-medium'>John Doe</span>
            <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image src="/avatar.png" alt='avatar' width={40} height={40} className='rounded-full' />
      </div>
    </div>
  )
}

export default navbar
