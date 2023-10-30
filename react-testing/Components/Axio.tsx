"use client"
import React, { useState } from 'react';
import axios from 'axios';

interface Image {
  id: string;
  author: string;
  download_url: string;
}

const Axio = () => {

  const [images, setImages] = useState<Image[]>([])
    const api=async ()=>{
       try{
        const res=await axios.get<Image[]>("https://picsum.photos/v2/list");

        const data=res.data;
       
        setImages(data);
       
        
       }
       catch(error){
        console.log("error",error);
       }


    };
  return (

    

<div >
      <button onClick={api}>Click</button>
      <div className='grid grid-cols-4 gap-3 px-4'>
      {images.map((e) => (
        <div  >
          <img className='h-[400px] w-[400px] rounded-xl object-cover' src={e.download_url} alt={e.author}
           />
          <p>Author: {e.author}</p>
          <p>{e.id}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Axio