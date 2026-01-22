import React from 'react'

const Pagination = () => {
  return (
    <div className='p-4 flex items-center justify-between text-gray-500'>
     <button className='py-2 px-4 bg-slate-200 rounded-md text-xs font-semibold disabled:opacity-45 disabled:cursor-not-allowed'>prev</button>
     <div>
        <button className='px-2 rounded-sm bg-lamasky'>1</button>
        <button className='px-2 rounded-sm bg-'>1</button>
        <button className='px-2 rounded-sm bg-'>2</button>
        <button className='px-2 rounded-sm bg-'>3</button>
        ....
        <button className='px-2 rounded-sm bg-'>10</button>
     </div>
     <button className='py-2 px-4 bg-slate-200 rounded-md text-xs font-semibold disabled:opacity-45 disabled:cursor-not-allowed'>prev</button>
    </div>
  )
}

export default Pagination
