"use client"
import { data } from "autoprefixer";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface data{
    id:string,
    title:string,
    des:string,
    price:string
}
const page = ({ params }: any) => {
  const { id } = params;
 
 
  

  return(
    <div>
        {`https://dummyjson.com/products/${id}`}
        
        
          

            

          
                
        
    </div>
  )
};

export default page;
