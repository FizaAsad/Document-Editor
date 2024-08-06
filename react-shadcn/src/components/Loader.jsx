
import React from 'react'
import { useEffect, useState } from 'react'
const Loader = () => {
    const [text, setText]= useState('');
    const [img, setImg]= useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setImg(false);
            setText('i waited')
        },3000)
    },[])
  return (
    <>
        <div>
            {
                img ?(
                    <img className ="w-screen h-screen" src='./sp.gif'/ >
                ):(
                    <h2>{text}</h2>
                )
            }
        </div>
    </>
  )
}

export default Loader
