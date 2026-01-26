import BigCalander from '@/components/BigCalander'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex-1 p-4 flex flex-col xl:flex-row'>
      {/* left */}
      <div className='w-full xl:w-2/3'>
        {/* top */}
        <div className='flex flex-col lg:flex-row gap-4'> 
            {/* user info card */}
            <div className='bg-lamasky py-6 px-4 rounded-md flex-1 flex gap-4'>
                <div className='w-1/3'>
                <Image src="/logo.png" alt='' height={144} width={144} className='w-36 h-36 rounded-full object-cover'/>
                </div>
                <div className='w-2/3 flex flex-col justify-between gap-4'>
                <h2>Asif Taher</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                    <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 '>
                        <Image src='/blood.png' alt='blood' width={14} height={14}/>
                        <span>A+</span>
                    </div>
                    <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 '>
                        <Image src='/date.png' alt='blood' width={14} height={14}/>
                        <span>January 2026</span>
                    </div>
                    <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 '>
                        <Image src='/mail.png' alt='blood' width={14} height={14}/>
                        <span>mdasiftaher2020@gmail.com</span>
                    </div>
                    <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 '>
                        <Image src='/phone.png' alt='blood' width={14} height={14}/>
                        <span>011111111</span>
                    </div>
                </div>
                </div>
            </div>
            {/* small card */}
            <div className='flex-1 flex justify-between gap-4 flex-wrap'>
                <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                    <Image src='/singleAttandance.png' alt=''width={24} height={24} className='w-6 h-6' />
                    <div>
                        <h2 className='text-xl font-semibold'>90%</h2>
                        <p className='text-xs text-gray-400'>Attendance</p>
                    </div>
                </div>
                <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                    <Image src='/singleBranch.png' alt=''width={24} height={24} className='w-6 h-6' />
                    <div>
                        <h2 className='text-xl font-semibold'>2</h2>
                        <p className='text-xs text-gray-400'>Branches</p>
                    </div>
                </div>
                <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                    <Image src='/singleLesson.png' alt=''width={24} height={24} className='w-6 h-6' />
                    <div>
                        <h2 className='text-xl font-semibold'>6</h2>
                        <p className='text-xs text-gray-400'>Lesson</p>
                    </div>
                </div>
                <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                    <Image src='/singleClass.png' alt=''width={24} height={24} className='w-6 h-6' />
                    <div>
                        <h2 className='text-xl font-semibold'>6</h2>
                        <p className='text-xs text-gray-400'>Classes</p>
                    </div>
                </div>
            </div>
        </div>
        {/* bottom */}
        <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
            <h2>Teacher's schedule</h2>
            <BigCalander />

        </div>
      </div>
      {/* right */}
      <div className='w-full xl:w-1/3'>
      r
      </div>
    </div>
  )
}

export default page
