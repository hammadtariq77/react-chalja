"use client"
import React,{useState} from 'react'
import axios from 'axios'
interface api{
  download_url:string,
    id:number,
    author:string
}


const Tryagain = () => {
const [images, setImages] = useState<api[]>([])
const func=async ()=>{
    const response=await axios.get("https://picsum.photos/v2/list");
    const result=response.data;
    setImages(result)
    console.log(images)
    


}

  return (
    <div >
<button className='btn btn-accent' onClick={func}>click me</button>
<div className='grid grid-cols-3 gap-4 px-5 text-center py-4'>
{images.map((e)=>{
  return( 
    <div key={e.id} className='space-y-3'>
      <img className='h-[300px] w-full rounded-md ' src={e.download_url} alt={e.author} />
      <h1 className='font-bold text-white'>writter : {e.author}</h1>

  </div>
  )

  
})}
</div>

        </div>
  )
}

export default Tryagain