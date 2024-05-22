import React, { useState } from 'react'

const Hoc = () => {
  return (
    <>
      <h1 style={{textAlign: "center", padding: "20px", color: "#111"}}>HOC</h1>

        <Wrapper rr={First} />
        <Wrapper2 rr={First} />

    </>
  )
}

function Wrapper(props){
    const cls1 = {backgroundColor: "red", padding: "20px", width: "200px", margin: "0 auto"}
    return(
        <>
            <h4 style={cls1}> <props.rr /> </h4>
        </>
    )
}

function Wrapper2(props){
    const cls2 = {backgroundColor: "blue", padding: "20px", width: "200px", margin: "0 auto"}
    return(
        <>
            <h4 style={cls2}> <props.rr /> </h4>
        </>
    )
}

function First(){
    const [count, setCount] = useState(0);
    const cls3 = {display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}
    return(
        <>  
            <div style={cls3}>
                <h4 style={{color: "white"}}> {count} </h4>
                <button onClick={()=>{setCount(count + 1)}} style={{padding: "10px 20px", border: "0"}}>Sumbit</button>
            </div>
        </>
    )
}

export default Hoc
