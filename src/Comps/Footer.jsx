import React from 'react'
import{FaFacebook, FaInstagram, FaTwitter, FaTwitch} from 'react-icons/fa'
function Footer() {
  return (
    <div className='w-full h-[600] bg-slate-900 text-gray-300 mix-blend-overlay py-8 px-2 '>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2 text-white'>solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2 text-white'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>Api status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2 text-white'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Shop</li>
                    <li className='py-1'>Blog</li>
                    <li className='py-1'>Jobs</li>
                </ul>
            </div>
            
            <div>
                <h6 className='font-bold uppercase pt-2 text-white'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold text-2xl text-white mb-5'>Subscribe to our newsletter</p>
                <p className='mb-5'>The latest news, artivles and resources, sent to your inbox weekly.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4' type="email"/>
                    <button className='p-2 mb-4'>Subscribes</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto items-center justify-between sm:flex-row text-center'>
            <p className='text-2xl'>2022 Workflow, Made with ♥</p>
            <div className='flex justify-between sm: w-[200px] pt-4 text-2xl'>
            <FaFacebook/>                
            <FaInstagram/>
            <FaTwitter/>
            <FaTwitch/>
            </div>

        </div>
    </div>
  )
}

export default Footer