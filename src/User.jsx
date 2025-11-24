import React from 'react'
import { Userdata } from './Userdata'

const User = () => {
    return (
        <div className="p-7 mx-auto my-4 shadow shadow-cyan-600 border w-3/4">
            <img src={Userdata[0].personImage} alt="" className='w-[200px] h-[200px] rounded-full mx-auto border border-cyan-700 border-4' />
            <h1 className="text-4xl font-extrabold underline text-center font-serif">{Userdata[0].personName}</h1>
            <div className="flex justify-between items-center gap-5 mt-3">
                <div className="flex items-center gap-2">
                    <h2 className="font-bold">Age:</h2>
                    <p>{Userdata[0].personAge} years</p>
                </div>


                <div className="flex items-center gap-2 mt-3">
                    <h2 className="font-bold">Profession:</h2>
                    <p>{Userdata[0].personWorkExperience} years</p>
                </div>
            </div>
            <span className="mx-auto flex gap-2 items-center justify-center mt-3">
                <h2 className="font-bold">Mail:</h2>
                <p>{Userdata[0].personMail} years</p>

            </span>
        </div>
    )
}

export default User