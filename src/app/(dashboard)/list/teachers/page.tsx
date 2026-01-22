import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { access } from 'fs'
import Image from 'next/image'
import React from 'react'

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subject",
    accessor: "subject",
    className: "hidden lg:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden lg:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
]

const TeacherListpage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* top */}
        <div className='flex items-center justify-between'>
            <h1 className='hidden md:block text-lg font-semibold '>All Teachers</h1>
            <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                <TableSearch />
                <div className='flex items-center gap-2 self-end'>
                  <button className='w-8 h-8 rounded-full bg-lamaYellow flex items-center justify-center'>
                    <Image src="/filter.png" alt='filter' width={14} height={14} />
                  </button>
                  <button className='w-8 h-8 rounded-full bg-lamaYellow flex items-center justify-center'>
                    <Image src="/sort.png" alt='filter' width={14} height={14} />
                  </button>
                  <button className='w-8 h-8 rounded-full bg-lamaYellow flex items-center justify-center'>
                    <Image src="/plus.png" alt='filter' width={14} height={14} />
                  </button>
                </div>
            </div>
        </div>
        {/* list */}
        <div>
          <Table columns={columns} />
        </div>
        {/* pagination */}
       <Pagination />
    </div>
  )
}

export default TeacherListpage
