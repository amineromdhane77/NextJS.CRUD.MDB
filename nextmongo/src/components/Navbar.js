import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className=' flex justify-between items-center bg-black py-3 px-8'>
    <Link href={'/'} className='text-white font-bold'>GTcoding</Link>
    <Link href={'/addTopic'} className='bg-white p-2'>Add Topic</Link>
    </nav>
    </div>
  )
}

export default Navbar