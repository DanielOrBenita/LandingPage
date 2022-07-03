import React from 'react'
import {PhoneIcon, ArrowSmRightIcon, } from '@heroicons/react/outline'
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'
import img from '../Assets/support.jpg'

function Support() {
  return (
    <div name="support" className='w-full  mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={img} alt="/"/>
        </div>

          <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='pt-8 text-slate-300 uppercase text-center text-3xl'>Support</h2>
                <h3 className='pt-8 text-white uppercase text-center font-bold text-6xl py-8' >Finding the right team</h3>
                <p className='pt-8 text-slate-300 text-2xl py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias impedit quis explicabo tempore dolorem eius repellendus ullam autem cumque, nemo, assumenda laboriosam, minima obcaecati perspiciatis. Amet aperiam nostrum recusandae possimus?</p>
            </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black max-w-[1240px] mx-auto'>
            <div className='bg-white rounded-xl shadow-2xl' >
                <div className='p-8'>
                    <PhoneIcon className='w-16 bg-indigo-600 text-white rounded-lg p-4 mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-3'>Sales</h3>
                    <p className='text-slate-600 text-xl mt-[-0.5rem]'> paragraph text example. should not be to long only to demonstrate a paragraph</p>
                </div>

                <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-6 mt-2'/></p>
                </div>
            </div>

            <div className='bg-white rounded-xl shadow-2xl' >
                <div className='p-8'>
                    <SupportIcon className='w-16 bg-indigo-600 text-white rounded-lg p-4 mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-3'>Technical Support </h3>
                    <p className='text-slate-600 text-xl mt-[-0.5rem]'> paragraph text example. should not be to long only to demonstrate a paragraph</p>
                </div>

                <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-6 mt-2'/></p>
                </div>
            </div>

            <div className='bg-white rounded-xl shadow-2xl' >
                <div className='p-8'>
                    <ChipIcon className='w-16 bg-indigo-600 text-white rounded-lg p-4 mt-[-4rem]'/>
                    <h3 className='font-bold text-2xl my-3'>Media inquiries</h3>
                    <p className='text-slate-600 text-xl mt-[-0.5rem]'> paragraph text example. should not be to long only to demonstrate a paragraph</p>
                </div>

                <div className='bg-slate-100 pl-8 py-4'>
                    <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-6 mt-2'/></p>
                </div>
            </div>


        </div>
        
    </div>
  )
}

export default Support