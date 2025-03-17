import React, { useEffect, useState } from "react";
import Wrapper from "./layout/Wrapper";
import {  useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/PasteSlice";

const Pastes = () => {


  const [title, setTitle] = useState("");
  const [value,setValue]=useState('');
  const [searchParams,setSearchParams]=useSearchParams();
  const pasteId =searchParams.get("pasteId");
  console.log("Paste ID:", pasteId); // Debugging
const dispatch =useDispatch();
const allPastes =useSelector((state)=>state.paste.pastes)

useEffect(()=>{

  if(pasteId){
    const paste=allPastes.find((p)=>p._id===pasteId);
    setTitle(paste.title);
    setValue(paste.content);
  }


  
},[pasteId])


function createPaste(){

const paste={
  title:title,
  content:value,
  _id:pasteId ||
  Date.now().toString(36),
  created:new Date().toISOString(),
} 




if(pasteId){
//update
dispatch(updateToPastes(paste));
}
else{
  //create
  dispatch(addToPastes(paste))

}
// after creation or updation

setTitle('');
setValue('');
setSearchParams({});

}




  return (
      <Wrapper>
    <div className="p-10 bg-gray-100">
     <div>
     <div className=" flex flex-row place-content-evenly   gap-7 ">
       <div className="flex flex-row place-content-evenly w-[100%] sm:w-[90%] gap-7" >
       <input
          className=" bg-black text-white rounded-md w-[50%]  p-2 mt-2"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title here"
        />
        {/* onClick={() => setSearchParams({ pasteId: "123" })}  */}
        {/* <Link to='/pastes'> */}
        <button onClick={createPaste}  className="bg-black text-white text:sm sm:text-md rounded-md   p-2 mt-2">
         {
         pasteId ? "Update Paste":"Create My Paste"
         }
        </button>
       </div>
        {/* </Link> */}
      </div>
      <div className=" flex place-content-evenly mt-4  w-full  gap-7 ">
<textarea className="bg-black rounded-2xl text-white w-[100%] sm:w-[66%]  p-4"
value={value}
placeholder="Enter content here"
onChange={(e)=>setValue(e.target.value)}
rows={20}

/>

      </div>
     </div>
    </div>
      </Wrapper>
  );
};

export default Pastes;
