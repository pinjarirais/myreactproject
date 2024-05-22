// import { useRef } from "react";
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    // const reverseText = useRef();
    

    // const textChange = ()=>{
    //    const rr = reverseText.current.innerText;
    //    rr.split("").reverse().join("");
    // }


    // const str = "Reverse text";

    // function reverseString(str) {
    //     return str.split('').reverse().join('');
    // }

    // const reversed = reverseString(str);




    // const str2 = "Reverse text"
    // const reverse = [...str2].reduce((prev,next) => next+prev);



    

    





    return (
        <>
            <h1>Test text</h1>
            <button onClick={() => navigate("/About")}>About</button><br />
            <button onClick={() => navigate("/Student")}>Student</button>

            <br />
            <br />

            {/* <h1>{str} is changes <span style={{ color: "red" }}>{reversed}</span></h1> */}

            {/* <h4>{str2} is changes <span style={{ color: "red" }}>{reverse}</span></h4> */}

            

        </>
    );
}

export default Home;
