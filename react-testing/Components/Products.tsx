"use client"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'

const Products = () => {
    interface data{
        id:string,
        brand:string,
        title:string


    }

    const [product, setProduct] = useState<data[]>([])
    
       
       
    

    useEffect(() => {
      
      async function products(){
        const res= await axios.get  ("https://dummyjson.com/products")
        const data= await res.data
       
        const result=await data.products
       
        setProduct(result)
      }
      
      products()
       
      
    }, [])
    
    
  return (
    <div>

<div className='grid grid-cols-5 px-4 py-7 gap-8 bg-yellow-500'>


{
  product.map((e)=>(
    <div key={e.id} className='bg-red-300 px-2 rounded-lg py-4 text-center text-black'>
        <h1>{e.brand}</h1>
        <h1>{e.title}</h1>
        <h1>
            {e.id}
        </h1>
        <button >
        <Link  href={`https://dummyjson.com/products/${e.id}`} >
        </Link>
        click me
        </button>

    </div>
  ))
}
</div>

    </div>
  )
}

export default Products