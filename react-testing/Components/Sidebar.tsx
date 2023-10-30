"use client"
import React,{useEffect,useState} from 'react'






const Sidebar = () => {
    const [check, setCheck] = useState(0)
    const btnfun=(e)=>{
         
        console.log(e)
        setCheck(check+2)
        console.log(check)
     }
    

   
  
  return (
    <>
    <div>
        <div className="drawer">
        
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 

           
  <div className="drawer-content flex bg-red-500 items-center ">
   
   
    {/* Navbar */}
    <div className="w-full flex items-center justify-between py-2 sm:py-0">
      
      <div className=" px-2 mx-2  text-black font-semibold text-xl">Navbar Title</div>
      <div className="flex-none hidden sm:block">
        <ul className="menu menu-horizontal text-white font-bold text-md ">
          {/* Navbar menu content here */}
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Services</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
     {/* icon code here*/}
    <div id='icon' className=" sm:hidden pr-3">
        <label onClick={btnfun}  htmlFor="my-drawer-3" aria-label="open sidebar" className="font-bold text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            
       
          
        </label>
      </div> 
    {/* Page content here */}
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-[50%] min-h-full text-white bg-red-500 font-bold text-lg">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
    </div>

    <h1>{check}</h1>
    </>
     )
}

export default Sidebar