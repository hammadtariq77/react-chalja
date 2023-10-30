import axios from 'axios'
import { type } from 'os'
import React,{useState} from 'react'
type user={
    name:String,
    idd:number,
    
}

const Userdata = (props:user) => {
 
   
 
   
  return (
    <div className='flex space-x-7 justify-center font-bold text-white py-5'>
        <div>
            <h1>{props.name}</h1>
        </div>
        <div>
            <h1>{props.idd}</h1>
        </div>
        
        
        
         
        

    </div>
  )
}

export default Userdata