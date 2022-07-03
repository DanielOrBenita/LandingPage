import React from 'react'

function About() {
  return (
    <div name ="about" className='w-full py-32' >
      <div className='max-w-[1240px] mx-auto '>

        <div className='text-center mb-4' >
          <h2 className="text-5xl font-bold mb-8 text-indigo-900">Trusted by developers across the world</h2>
          <p className="text-2xl text-gray-500 mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia explicabo saepe aliquid excepturi, maxime itaque? Atque repudiandae, id error doloribus iure quo sed earum aspernatur aperiam optio rerum beatae soluta?</p>
        </div>
        
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>

            <div className='border py-8 rounded-xl bg-zinc-50 shadow-xl text-indigo-500'>
              <h2 className='text-5xl mb-1 font-bold'>24/7</h2>
              <h3 className='text-gray-500'>delivery</h3>
              <p className='text-gray-500 text-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta doloribus ipsa hic? Distinctio, officiis? Dolore neque harum cum illum enim. Minima officiis maiores veniam tenetur amet sed temporibus quod.</p>
            </div>

            <div className='border py-8 rounded-xl bg-zinc-50 shadow-xl text-indigo-500'>
              <h2 className='text-5xl mb-1 font-bold'>100%</h2>
              <h3 className='text-gray-500'>completion</h3>
              <p className='text-gray-500 text-xl p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta doloribus ipsa hic? Distinctio, officiis? Dolore neque harum cum illum enim. Minima officiis maiores veniam tenetur amet sed temporibus quod.</p>
            </div>

            <div className='border py-8 rounded-xl bg-zinc-50 shadow-xl text-indigo-500'>
              <h2 className='text-5xl mb-1 font-bold'>100K</h2>
              <h3 className='text-gray-500'>Transactions</h3>
              <p className='text-gray-500 text-xl p-4'>L0rem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta doloribus ipsa hic? Distinctio, officiis? Dolore neque harum cum illum enim. Minima officiis maiores veniam tenetur amet sed temporibus quod.</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default About