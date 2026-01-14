import CountChart from '@/components/CountChart'
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
      <div className='w-full lg:w-1/3'>
      <h2>Right</h2>
      </div>
    </div>
  )
}

export default AdminPage
