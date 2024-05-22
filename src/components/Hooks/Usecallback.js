import { useCallback, useState } from 'react'
import Todo from './Todo'

const CallBackHooks = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `New Entry`]);
  }, [todos]);

  // const addtodo = ()=>{
  //     setTodos((prev)=>{return [...prev, `New Entry`]})
  // };

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />

      <br />
      <br />
      <div>
        Count: <b>{count}</b>
        <button className="incbtn" onClick={increment}>INC</button>
      </div>
    </>
  )
}

export default CallBackHooks;
