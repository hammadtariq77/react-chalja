import React from 'react'

const page = ({params}:any) => {
    
    const data=params.products
  return (
    <div>
        <h1>
            helooo i am catagory/ anything u want to search  
        </h1>
        <h1>{data}</h1>
    </div>
  )
}

export default page