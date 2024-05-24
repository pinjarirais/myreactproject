import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getalluser } from '../store/reducer/reduxapicall';

const ReduxApicall = () => {
    const dispatch = useDispatch();
    const data = useSelector((state)=>{
        return state.userapi
    });

if(data.loading){
    return <h2>Loading...</h2>
}

if(data.error != null){
    return <h2>{data.error}</h2>
}

  return (
    <>
        <h1>Redux API Call</h1>
        <button onClick={() => {dispatch(getalluser())}}>Get All User</button>
        
        {
            data.users.map((item) => {
                return <h2 key={item.id}>{item.name}</h2>
            })
        }

    </>
  )
}

export default ReduxApicall;
