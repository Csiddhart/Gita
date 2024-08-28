import React, { useContext, useState } from 'react'
import { GitaContext } from '../context/GitaContext';
import Display from './Display'
import Empty from './Empty';

function Input() {
    const {gita}=useContext(GitaContext);
    const[chap,setChap]=useState();
    const [vers,setVers]=useState();

    function clickHandler(event){
        event.preventDefault();
        gita(chap,vers)
    }
  return (
   <div>
     <div className='flex flex-col  justify-center items-center  px-4 py-5 mx-4 my-5'>
        <input type="number" placeholder='enter chapter number'value={chap ||""} className='px-4 mx-4 my-5 rounded-md' onChange={(e)=>setChap(e.target.value)}/>
        <input type="number" placeholder='enter slok number' value={vers ||""} className='px-4 mx-4 my-5 rounded-md'  onChange={(e)=>setVers(e.target.value)}/>
        <button onClick={clickHandler} className='bg-orange-400 hover:bg-orange-700 text-orange-100 px-4 mx-4 rounded-md'>See the Slok</button>
    </div>
    <Display/>
   </div>
  )
}

export default Input