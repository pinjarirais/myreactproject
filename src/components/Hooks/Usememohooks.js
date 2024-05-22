import React, { useMemo, useState } from 'react'

const Usememohooks = () => {
    const [myNum, setMyNum] = useState(0);
    const [show, setShow] = useState(false)

    const getValue = () => {
        return setMyNum(myNum + 1)
    };

    const countNumber = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) { }
        return num;
    };

    const checkdata = useMemo(() => {
        return countNumber(myNum);
    }, [myNum])



    return (
        <>
            <h4 className='color777'>Usememo Hooks</h4>
            <button onClick={getValue} className="Counterbtn mt30">Counter</button>
            <p className='mt30'>My New number : {checkdata} </p>
            <button onClick={() => { setShow(!show) }} className="clickmebtn mt30">
                {show ? "You Already click me" : "Click me"}
            </button>

        </>
    )
}

export default Usememohooks;
