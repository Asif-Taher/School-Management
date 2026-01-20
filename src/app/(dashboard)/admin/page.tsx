import Announcments from '@/components/Announcments'
import CountChart from '@/components/CountChart'
import EventCalander from '@/components/EventCalander'
import UserCart from '@/components/UserCart'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex flex-col md:flex-row gap-4'>
    {/* left */}
      <div className='w-full lg:w-2/3'>
      <div className='flex flex-wrap w-full justify-between gap-4'>
       <UserCart type='student'/>
      <UserCart type='teacher'/>
      <UserCart type='parent'/>
      <UserCart type='admin'/>
      </div>
      <CountChart />
      </div>
      {/* right */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
      <EventCalander />
      <Announcments />
      </div>
    </div>
  )
}

export default AdminPage
