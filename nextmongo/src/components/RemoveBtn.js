"use client";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";
function RemoveBtn({id}) {
const router = useRouter();
  const removetopic= async()=>{
const conffirmed =confirm('are you sure?')
if (conffirmed){
 const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{method:"DELETE"})
 if (res.ok){
  router.refresh()
}
}
  }
  
  return (
    <button onClick={removetopic}>
    <RiDeleteBin6Fill size={24}  className=' text-red-900'/>
</button>
  )
}

export default RemoveBtn