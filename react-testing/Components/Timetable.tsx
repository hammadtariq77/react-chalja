import React from 'react'
import Test from "@/Components/Test";

type slotprop={
  idd:number,
  name:String,


}

const Prop = (props:slotprop) => {
  
  return (
    <>
    <div className='uppercase text-xl bg-gray-200 py-2 font-bold'>
     <h1>   {props.idd}  :  {props.name} </h1>
     
     
      </div>
      </>
  )
}

export default Prop