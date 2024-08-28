import React, { useCallback, useContext } from 'react'
import { GitaContext } from '../context/GitaContext'

function Display() {
    const {id,slok,translation,prabhupad,chinmay}=useContext(GitaContext);
    const isEmpty = !id && !slok && !translation && !chinmay && !prabhupad;

    return (
        <div className={`flex flex-row ${isEmpty ? 'bg-transparent' : 'bg-orange-300'}`}>
           <div className='text-slate-950 text-[16px] md:text-[20px]'>
           <div className='border justify-center items-center'>
            <h2 className='justify-center items-center'>Slok Number:- {id}</h2>
            <p>Slok:- {slok}</p>
            <p>Translation:- {translation}</p>
           </div>
            <div className='border p-4 justify-center items-center w-full '>
                <h3>Author:- {chinmay?.author}</h3>
                <p>Hindi Commentry:- {chinmay?.hc}</p>
            </div>
            <div className='border p-4 justify-center items-center w-full '>
                <h3>Author:- {prabhupad?.author}</h3>
                <p>English Translation:- {prabhupad?.et}</p>
                <p>English Commentry:- {prabhupad?.ec}</p>
            </div>
        </div>
    </div>
  )
}

export default Display