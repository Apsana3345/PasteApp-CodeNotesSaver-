import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import Wrapper from '../components/layout/Wrapper'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/PasteSlice';
import toast from 'react-hot-toast';
import { Link, useSearchParams } from 'react-router-dom';

const PastesPage = () => {

const pastes =useSelector((state)=>state.paste.pastes);
const[searchTerm,setSearchTerm]=useState('');
const dispatch =useDispatch();

console.log(pastes)

const filteredData =pastes.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase()))

function  handleDelete(pasteId){
dispatch(removeFromPastes(pasteId));


}


  return (
        <Wrapper>
    <div className='flex items-center flex-col' >


<input className=' px-4 bg-black text-white mt-4 rounded-xl w-[70%] sm:w-[50%] p-3'
 type="search"
placeholder='search here'
value={searchTerm}
onChange={(e)=>setSearchTerm(e.target.value)}
/>


<div className="flex w-[50%]   flex-col gap-5">
{
  filteredData.length > 0 && 
  filteredData.map((paste)=>{
  return(
    <div  className=' flex  items-center place-content-evenly p-2 rounded-sm border mt-2' key={paste?._id}>
      <div>
      <div>
      {paste.title}
      
    </div>
    <div>
      {paste.content}
    </div>
      </div>
<div className='flex flex-col gap-4 place-content-evenly'>
  <div className='flex'>
  <button   className='bg-black text-white rounded-sm p-1 m-2 cursor-pointer hover:bg-gray-700'>
   <Link to={`/?pasteId=${paste?._id}`}>
   Edit
   </Link>
  </button>
  <button className='bg-black text-white rounded-sm p-1 m-2 cursor-pointer hover:bg-gray-700'>
   <Link to={`/pastes/${paste?._id}`}>
   View
   </Link>
  </button>
  <button onClick={()=>handleDelete(paste?._id)} className='bg-black text-white rounded-sm p-1 m-2 cursor-pointer hover:bg-gray-700' >
    Delete
  </button>
  <button onClick={()=>{
    navigator.clipboard.writeText(paste?.content)
    toast.success("copied to Clipboard")
  }} className='bg-black text-white rounded-sm p-1 m-2 cursor-pointer hover:bg-gray-700'>
    Copy
  </button>
  <button  onClick={() => {
    if (navigator.share) {
      navigator.share({
        title: paste?.title,
        text: `${paste?.title}\n\n${paste.content}`, // The content to share
        // url: window.location.href, // You can provide a link to the paste
      })
      .then(() => toast.success("Shared successfully"))
      .catch((error) => console.error("Error sharing:", error));
    } else {
      toast.error("Sharing is not supported in this browser");
    }
  }}  className='bg-black text-white rounded-sm p-1 m-2 cursor-pointer hover:bg-gray-700'>
    Share
  </button>
  </div>
<div>
  {paste.created}
</div>
</div>

    </div>
  )})
}


</div>

    </div>
 </Wrapper>
  )
}

export default PastesPage