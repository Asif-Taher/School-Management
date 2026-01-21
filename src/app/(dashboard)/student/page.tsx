import Announcments from '@/components/Announcments'
import BigCalander from '@/components/BigCalander'
import EventCalander from '@/components/EventCalander'
import React from 'react'

const StudentPage = () => {
  return (
    <div className='p-4 flex flex-col xl:flex-row'>
      {/* left */}
      <div className='w-full xl:w-2/3'>
        <div className='h-full bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule (4A)</h1>
          <BigCalander />
        </div>
      </div>
      {/* right */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
      <EventCalander />
      <Announcments />
      </div>
    </div>
  )
}

export default StudentPage
