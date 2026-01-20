"use client";
import React from 'react'
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

import Image from 'next/image';
// #region Sample data
const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknown',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* title */}
      <div className='flex justify-between items-center'>
       <h2>Student</h2>
       <Image src="/moreDark.png" alt='moredark' width={20} height={20} />
      </div>
      {/* user chart */}
      <div>
        <RadialBarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '80vh', aspectRatio: 1.618 }}
      responsive
      cx="30%"
      barSize={14}
      data={data}
    >
      <RadialBar label={{ position: 'insideStart', fill: '#fff' }} background dataKey="uv" />
      <Legend iconSize={10} layout="vertical" verticalAlign="middle"/>
      <Tooltip />
    </RadialBarChart>
      </div>
      {/* middle chart */}
      <div>
        {/* count chart */}
        <div>

        </div>
        {/* attandence chart */}
        <div>

        </div>
      </div>
      {/* bottom chart */}
      <div className='flex justify-between items-center'>
      <div>
      <div className='bg-lamasky rounded-full h-5 w-5'/>
      <h1>1234</h1>
      <h2>Boys(55%)</h2>
      </div>
      {/* bottom */}
      <div>
      <div className='bg-lamasky rounded-full h-5 w-5'/>
      <h1>1234</h1>
      <h2>Girls(45%)</h2>
      </div>
      </div>
    </div>
  )
}

export default CountChart
