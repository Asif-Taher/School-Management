import React from 'react'
const events = [
    {
        id: 1,
        title: 'lorem ispsum dolor',
        time: '12:00 PM - 02:00 PM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ducimus.'
    },
    {
        id: 2,
        title: 'lorem ispsum dolor',
        time: '12:00 PM - 02:00 PM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ducimus.'
    },
    {
        id: 3,
        title: 'lorem ispsum dolor',
        time: '12:00 PM - 02:00 PM',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, ducimus.'
    },
]
const Announcments = () => {
  return (
    <div  className='bg-white p-4 rounded-md'>
        <div className='flex items-center justify-between '>
                <h2 className='text-xl'>Announcements</h2>
                <p>See All</p>
              </div>
              <div className='flex flex-col gap-4'>
                {
                    events.map((event) => (
                        <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamasky even:border-t-lamaPurple' key={event.id}>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-xl font-semibold my-4'>{event.title}</h1>
                                <span>{event.time}</span>
                            </div>
                            <p>{event.description}</p>
                        </div>
                    ))
                }
              </div>
    </div>
  )
}

export default Announcments
