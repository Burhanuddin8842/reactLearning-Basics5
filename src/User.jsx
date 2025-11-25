import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"; 
import React, { useState } from 'react'
import { Userdata } from './Userdata'

const User = () => {
    let [indexNum,setIndexNum]=useState(0)
    return (
        <div className="p-7 mx-auto my-36 shadow shadow-cyan-600 border w-3/4">
            <img src={Userdata[indexNum].personImage} alt="" className='w-[200px] h-[200px] rounded-full mx-auto border border-cyan-700 border-4' />
            <h1 className="text-4xl font-extrabold underline text-center font-serif">{Userdata[indexNum].personName}</h1>
            <div className="flex justify-between items-center gap-5 mt-3">
                <div className="flex items-center gap-2">
                    <h2 className="font-bold">Age:</h2>
                    <p>{Userdata[indexNum].personAge} years</p>
                </div>


                <div className="flex items-center gap-2 mt-3">
                    <h2 className="font-bold">Profession:</h2>
                    <p>{Userdata[indexNum].personWorkExperience} years</p>
                </div>
            </div>
            <span className="mx-auto flex gap-2 items-center justify-center mt-3">
                <h2 className="font-bold">Mail:</h2>
                <p>{Userdata[indexNum].personMail}</p>
            </span>
            <div className="flex items-center gap-3 mt-3">
                <h2 className="font-bold">AboutMe:</h2>
                <p>{Userdata[indexNum].personAboutMe}</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
                <h2 className="font-bold">Work Experience:</h2>
                <p>{Userdata[indexNum].personWorkExperienceDescription}</p>
            </div>
            <button className="p-1 flex items-center justify-center bg-gray-300 rounded-full absolute left-2 top-1/2">
                <AiFillCaretLeft className="text-4xl " onClick={()=>setIndexNum(indexNum--)}/>
            </button>
            <button className="p-1 flex items-center justify-center bg-gray-300 rounded-full absolute right-2 top-1/2">
                <AiFillCaretRight className="text-4xl " onClick={()=>setIndexNum(indexNum++)}/>
            </button>
        </div>
    )
}

export default User