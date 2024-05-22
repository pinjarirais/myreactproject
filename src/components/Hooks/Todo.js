import { memo } from "react";

const Todo = ({todos, addTodo}) => {
    console.log("child render");
  return (
    <>
      <h1 className='color777'>Usecallback</h1><br /><br />
      <h4>My Todo</h4>
      {
        todos.map((val, ind)=>{
            return (
                <p key={ind}>{val + ind}</p>
            )
        })
      }
      <button onClick={addTodo} className="addtodo">Add Todo</button> 
    </>
  )
}

export default memo(Todo);
