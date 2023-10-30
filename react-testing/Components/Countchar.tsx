"use client"
import React,{useState} from 'react'
const Countchar = () => {
    const [char, setchar] = useState<string>("")
    const show=char.length
    const space=char.trim()

    function count(e){
        console.log(e.classList)
    }

  return (
    <div className='text-center '>
        <input type="text" className='bg-white h-8 '
        
        onChange={count}
        
     />
    
    </div>
  )
}

export default Countchar