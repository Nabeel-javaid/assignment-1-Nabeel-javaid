import React, { useEffect } from 'react'
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { MdOutlineGeneratingTokens } from 'react-icons/md';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { BiTimer } from 'react-icons/bi';
import { LineChart, XAxis, YAxis, Line, CartesianGrid, ResponsiveContainer } from 'recharts';

const RiderData = () => {
    

    const data = [{
        name: 'Day 1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Day 2',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Day 3',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Day 3',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Day 4',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Day 5',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Day 6',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },]

  return (
    <div className='flex h-screen mt-20'>
    <div className='flex lg:flex-row flex-col  w-full p-12  h-4/5'>
        <div id='info-grid' className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:w-1/2 w-full ' >
            <div className='shadow-md m-2 rounded-xl p-4 bg-gradient-to-r from-orange-400 to-rose-400 flex flex-col  '>
                <div className='flex flex-row '>


                    <div id='icon' className='bg-green-500 rounded-lg p-2'>
                        <FaMoneyCheckAlt className='text-[1.9rem] text-white' />
                    </div>
                    <div id='heading' className=' mt-2 ml-2 text-xl font-bold text-white '> Revenue</div>
                </div>
                <div className='flex flex-col justify-evenly h-full  '>

                    <div id='Data-int' className='text-white font-bold text-3xl '> $3200</div>
                    <div id='Small-Text' className='flex flex-row '><span className='flex text-purple-800 mr-2'>45% </span>up this week</div>
                </div>
            </div>
            <div className='shadow-md m-2 rounded-xl p-4 bg-gradient-to-r from-green-200 to-green-500 flex flex-col'> <div className='flex flex-row '>


                <div id='icon' className='bg-purple-500 rounded-lg p-2'>
                    <MdOutlineDeliveryDining className='text-[2rem] text-white' />
                </div>
                <div id='heading' className=' mt-2 ml-2 text-xl font-bold text-white '> Total Rides</div>
            </div>
                <div className='flex flex-col justify-evenly h-full  '>

                    <div id='Data-int' className='text-white font-bold text-3xl '> 370</div>
                    <div id='Small-Text' className='flex flex-row '><span className='flex text-purple-800 mr-2'>12% </span>increase in rides</div>
                </div></div>
            <div className='shadow-md m-2 rounded-xl p-4 bg-gradient-to-r from-violet-300 to-violet-400  flex flex-col'> <div className='flex flex-row '>


                <div id='icon' className='bg-blue-500 rounded-lg p-2'>
                    <MdOutlineGeneratingTokens className='text-[2rem] text-white' />
                </div>
                <div id='heading' className=' mt-2 ml-2 text-xl font-bold text-white '> Ratings</div>
            </div>
                <div className='flex flex-col justify-evenly h-full  '>

                    <div id='Data-int' className='text-white font-bold text-3xl '> 4.5/5</div>
                    <div id='Small-Text' className='flex flex-row '><span className='flex mr-2'>Better then 40% </span></div>
                </div></div>
            <div className='shadow-md m-2 rounded-xl p-4 bg-gradient-to-r from-rose-500 via-red-400 to-red-500  flex flex-col'> <div className='flex flex-row '>


                <div id='icon' className=' rounded-lg p-2 bg-blue-400'>
                    <BiTimer className='text-[2rem] text-white' />
                </div>
                <div id='heading' className=' mt-2 ml-2 text-xl font-bold text-white '> Time Spend</div>
            </div>
                <div className='flex flex-col justify-evenly h-full  '>

                    <div id='Data-int' className='text-white font-bold text-3xl '> 10d 15h</div>
                    <div id='Small-Text' className='flex flex-row '><span className='flex text-purple-800 mr-2'>45% </span>up this week</div>
                </div></div>

        </div>
        <div id='banner' className=' lg:p-0 bg-slate-700 lg:w-1/2 w-full rounded-lg flex items-center justify-center ml-0 lg:mt-0 mt-4'>
            <ResponsiveContainer >

                <LineChart  data={data} margin={{ top: 30, right: 30, left: 30, bottom: 20 }}  >
                    <XAxis dataKey="name" stroke="#FF5676" />
                    <YAxis stroke="#FF5676" />
                // {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> */}
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>

</div>
  )
}

export default RiderData
