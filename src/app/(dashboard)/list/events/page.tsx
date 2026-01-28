import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { assignmentsData, eventsData, resultsData, role,} from '@/lib/data'
import { access } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Event = {
  id:number;
  title:string;
  class: number;
  date: string;
  score: number;
  startTime: string;
  endTime: string;
}

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",

  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Start Time",
    accessor: "startTime",
    className: "hidden md:table-cell",
  },
  {
    header: "End Time",
    accessor: "endTime",
    className: "hidden md:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
]

const EventListPage = () => {
const renderRow = (item:Event) => (
<tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamapurple'>
    {/* <Image src={item.photo} alt='' width={40} height={40} 
    className='md:hidden xl:block w-10 h-10 rounded-full object-cover'
    /> */}
    <td className='hidden md:table-cell'>{item.title}</td>
    <td>{item.class}</td>
    <td className='hidden md:table-cell'>{item.date}</td>
    <td className='hidden md:table-cell'>{item.startTime}</td>
    <td className='hidden md:table-cell'>{item.endTime}</td>
    <td className='hidden md:table-cell'>{item.date}</td>
  <td>
    <div className='flex items-center gap-2'>
      <Link href={`/list/teachers/${item.id}`}>
      <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamasky'>
      <Image src='/view.png' alt='' width={16} height={16}/>
      </button>
      </Link>
     {
      role === "admin" && (
        //    <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'>
        //   <Image src='/delete.png' alt='' height={16} width={16}/>
        // </button>
           <>
          <FormModel table='event' type="update" data={item} />
          <FormModel table='event' type="delete" id={item.id} />
        </>
      )
     }

    </div>
  </td>
</tr>
)
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* top */}
        <div className='flex items-center justify-between'>
            <h1 className='hidden md:block text-lg font-semibold '>All Subjects</h1>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                <TableSearch />
                <div className='flex items-center gap-2 self-end'>
                  <button className='w-8 h-8 rounded-full bg-lamaYellow flex items-center justify-center'>
                    <Image src="/filter.png" alt='filter' width={14} height={14} />
                  </button>
                  <button className='w-8 h-8 rounded-full bg-lamaYellow flex items-center justify-center'>
                    <Image src="/sort.png" alt='filter' width={14} height={14} />
                  </button>

                  {
                    role === "admin" && (
                  //       <button className='w-8 h-8 rounded-full bg-lamaYellow flex items-center justify-center'>
                  //   <Image src="/plus.png" alt='filter' width={14} height={14} />
                  // </button>
                     <FormModel table='teacher' type="create"/>

                    )
                  }
                </div>
            </div>
        </div>
        {/* list */}
        <div>
          <Table columns={columns} renderRow={renderRow} data={eventsData}/>
        </div>
        {/* pagination */}
       <Pagination />
    </div>
  )
}

export default EventListPage
