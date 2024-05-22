import React, { useContext } from 'react'
import {Globledata} from '../App.js'
function Student(){
  const newColor = useContext(Globledata);
  console.log(newColor)
  return (
    <>
      <h1 style={{color:newColor.Ccolor}}>Student</h1>
    </>
  )
}

export default Student;