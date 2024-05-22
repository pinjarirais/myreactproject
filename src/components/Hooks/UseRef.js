import React, { useRef } from 'react'
import "./Hooks.css"

const UseRef = () => {
    const inputRef = useRef();

    const changeinput = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
        inputRef.current.style.color = "white"
    };

    return (
        <>
            <h1 className="color777">UseRef</h1>

            <div className="useRef__outer">
                <input ref={inputRef} type="text" name="" /><br></br>
                <button onClick={changeinput}>submit</button>
            </div>

        </>
    )
}

export default UseRef;
