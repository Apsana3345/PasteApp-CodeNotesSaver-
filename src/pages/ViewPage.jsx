import React, { useEffect, useState } from "react";
import {  useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/PasteSlice";
import Wrapper from "../components/layout/Wrapper";

const ViewPage = () => {

const {id}=useParams();
const allPastes=useSelector((state)=>state.paste.pastes);
const paste= allPastes.filter((p)=>p._id===id)[0];


  return (
    <Wrapper>
    <div className="p-10 bg-gray-100">
     <div>
     <div className=" flex flex-row place-content-evenly   gap-7 ">
       <div className="flex flex-row place-content-evenly w-[100%] sm:w-[90%] gap-7" >
       <input
          className=" bg-black text-white rounded-md w-[50%]  p-2 mt-2"
          type="text"
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title here"
        />
        {/* onClick={() => setSearchParams({ pasteId: "123" })}  */}
        {/* <Link to='/pastes'> */}
        {/* <button onClick={createPaste}  className="bg-black text-white text:sm sm:text-md rounded-md   p-2 mt-2">
         {
         pasteId ? "Update Paste":"Create My Paste"
         }
        </button> */}
       </div>
        {/* </Link> */}
      </div>
      <div className=" flex place-content-evenly mt-4  w-full  gap-7 ">
<textarea className="bg-black rounded-2xl text-white w-[100%] sm:w-[66%]  p-4"
value={paste.content}
disabled
placeholder="Enter content here"
onChange={(e)=>setValue(e.target.value)}
rows={20}

/>

      </div>
     </div>
    </div>
      </Wrapper>
  )
}

export default ViewPage