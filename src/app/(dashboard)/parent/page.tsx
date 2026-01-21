import Announcments from '@/components/Announcments'
import BigCalander from '@/components/BigCalander'
import EventCalander from '@/components/EventCalander'
import React from 'react'

const ParentPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col xl:flex-row'>
      {/* left */}
      <div className=' w-full xl:w-2/3'>
        <div className=' bg-white p-4 rounded-md'>
          <h1 className='text-xl font-semibold'>Schedule(chokon)</h1>
          <BigCalander />
        </div>
      </div>
      {/* right */}
      <div className='w-full xl:w-1/3 flex flex-col gap-8'>
      <Announcments />
      </div>
    </div>
  )
}

export default ParentPage
