"use client"
import React,{useState} from 'react'
interface timeTable{
    
    time:string,
    subject:string

}

const Test = () => {
    const ttable:timeTable[]=[
        {
            time:"8.00 : 9.00",
            subject:"Engllish"
        },
        {
            time:"9.00 : 10.00",
            subject:"Bio"
        },
        {
            time:"10.00 : 11.00",
            subject:"computer"
        },
        {
            time:"11.00 : 12.00",
            subject:"chemistry"
        },
        {
            time:"12.00 : 1.00",
            subject:"math"
        }

    ]

    const [tabble, settabble] = useState(ttable)
  return (
    <div className='grid grid-cols-5 gap-8   uppercase  text-center text-white '>
    {tabble.map((item)=>{
        return(
            <div className='space-y-4 bg-red-400 rounded-sm '>
                <h1 className='font-bold bg-slate-700 py-2'>{item.subject}</h1>
                <h1 className='font-semibold py-1'>{item.time}</h1>
            </div>
        )
    })}
    </div>
  )
}

export default Test