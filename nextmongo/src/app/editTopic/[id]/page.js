import React from 'react'
import EditTopicForm from '@/components/EditTopicForm'



const getTopicById = async(id)=>{
const res =await fetch(`http://localhost:3000/api/topics/${id}`,{cache:'no-store'})

if (!res.ok){
  throw new Error('failed to fetch topic')
}
return res.json()
}
 
 async function page({params}) {
  const {id}=params;
 
  const {topic} = await getTopicById(id);
const {title ,description} = topic;
  return (
    <div>
    <EditTopicForm id={id} title={title} description={description}/>
    </div>
  )
}

export default page