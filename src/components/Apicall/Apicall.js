import React, { useState, useEffect } from 'react';

const Apicall = () => {
    const [apidata, setApiData] = useState([]);
    const [apidata2, setApiData2] = useState([]);
    const [ischecked, setIsChecked] = useState(false);
    const [ischecked2, setIsChecked2] = useState(false);

    const clickHandler = (e)=>{
        if(e.target.value === "post"){
            setIsChecked(true)
        }

        setIsChecked2(false)
    }
    const clickHandler2 = (e)=>{
        if(e.target.value === "users"){
            setIsChecked2(true)
        }
            
        setIsChecked(false)
    }
    
useEffect(()=>{
    const datafunc = async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let res2 = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();
        let data2 = await res2.json();

        setApiData(data);
        setApiData2(data2);


    };
    datafunc();
},[]);
  


    return (
        <>
            <div className="rdo_outer">
                <div><label><input type="radio" name="00" value="post" onChange={clickHandler} /> Post</label></div>
                <div><label><input type="radio" name="00" value="users"  onChange={clickHandler2} /> Users</label></div>
            </div>

            {!ischecked ? 
            <div className="userdata">
                <ul>
                    {
                        apidata.map((list) => {
                            return (
                                <li key={list.name}>{list.name}</li>
                            )
                        })
                    }

                </ul>
            </div> : ""
            }
            {!ischecked2 ? 
            <div className="postdata">
                <ul>
                    {
                        apidata2.map((list) => {
                            return (
                                <li key={list.title}>{list.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
            : ""
            }
        </>
    )
}

export default Apicall;
