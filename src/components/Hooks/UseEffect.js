import React, { useEffect, useState } from 'react'
import './Hooks.css'

const UseEffect = () => {
const [windowWidth, setWindowWidth] = useState(window.screen.width);

const currentScreenWidth = ()=>{
    setWindowWidth(()=>{
        return window.innerWidth;
    })
}

useEffect(()=>{
    window.addEventListener("resize", currentScreenWidth);
    return ()=>{
        window.removeEventListener("resize", currentScreenWidth);
    }
});

  return (
    <>
      <h4 className="color777">Window width change when resize <span style={{color: "red", fontWeight: "600"}}>{windowWidth}</span></h4>
    </>
  )
}

export default UseEffect
