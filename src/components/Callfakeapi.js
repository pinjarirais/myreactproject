import { useEffect, useState } from 'react'

const Callfakeapi = () => {
    const [data, setData] = useState([]);

useEffect(()=>{
    async function datacall(){
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
        console.log(data);
    }
    datacall();    

}, [])
  return (
    <div>
      {data && data.map((item)=>(
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  )
}

export default Callfakeapi;
