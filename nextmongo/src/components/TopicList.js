import React from 'react'
import RemoveBtn from './RemoveBtn'
import { FiEdit } from "react-icons/fi";
import Link from 'next/link'

const getTopics =async()=>{
  
  try {
    const res = await fetch('http://localhost:3000/api/topics',{cache:'no-store'})
if(!res.ok){
  throw new Error('feald to fetch topics')
}
return res.json()
  } catch (error) {
    console.log('failed topic',error)
  }
}
 async function TopicList() {
  const {topics}= await getTopics()
  return (
<div>
    {
      topics.map((t)=>(
  
    <div key={t.id} className=' flex justify-between items-center border-black p-4 my-3 gap-5' >
    <div>
    <h1 className=' text-2xl  font-bold'>{t.title}</h1>
    <div>{t.description}</div>
    </div>
    <div className='flex gap-4'>
    <RemoveBtn id={t._id} />
    <Link href={`/editTopic/${t._id}`}>
    <FiEdit  size={24}  className=' text-blue-800' />
    </Link>
    </div>
    </div>
    ))  }
    </div>
  )
}

export default TopicList