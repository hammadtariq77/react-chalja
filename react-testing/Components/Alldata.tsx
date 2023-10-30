import React from 'react'
import Timetable from "@/Components/Timetable";
import Test from "@/Components/Test";

const Alldata = () => {
  return (
    <>
    <div className=' text-center px-4  py-8 space-y-4 text-black  bg-emerald-400'>
      
        <Timetable  name="BS cs G1" idd= {1}  />
        <Test/>
        
        
        <Timetable name="Bs Statistices" idd={2}/>
        <Test/>
        <Timetable name="BS botany" idd={3}/>
        <Test/>
        <Timetable name="BS chemistry" idd={4}/>
        <Test/>
        <Timetable name="BS Math" idd={5}/>
        <Test/>
    </div>
    </>
  )
}

export default Alldata