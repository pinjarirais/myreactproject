import React from 'react'
import './Todo.css'
import { useState } from 'react'
import { useEffect } from 'react';

const getlocaldata = ()=>{
    const lists = localStorage.getItem("mytodokey")

    if(lists){
        return JSON.parse(lists);
    }else{
        return [];
    }
}

const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getlocaldata());
    const [edititemdata, setEdititemdata] = useState("");
    const [togglebtn, setTogglebtn] = useState(false)

    const additems = ()=>{
        if(!inputdata){
            alert('pls fill data')
        }else if(inputdata && togglebtn){
            setItems(
                items.map((currdata)=>{
                    if(currdata.id === edititemdata){
                        return{...currdata, name:inputdata }
                    }
                    return currdata;
                }) 
            );

            setInputData([])
            setEdititemdata(null)
            setTogglebtn(false)
        }
        else{
            const myObj = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myObj])
            setInputData("")
        }
    }

    const edititem = (index)=>{
        const editediteams = items.find((currElm)=>{
            return currElm.id === index;
        })

        setInputData(editediteams.name)
        setEdititemdata(index)
        setTogglebtn(true)
    }

    const deleteFunc = (index)=>{
        const fltiteams = items.filter((currentElm)=>{
            return currentElm.id !== index;
        })
        setItems(fltiteams)
    }

    const removeall = ()=>{
        setItems([])
    }

    useEffect(()=>{
        localStorage.setItem("mytodokey", JSON.stringify(items))
    },[items])

  return (
    <>
      <div className="todo__input">
        <input type="text" name="" placeholder='Add Todo' value={inputdata} onChange={(e)=>setInputData(e.target.value)} />
        {togglebtn ? 
            <span onClick={additems}>Add</span> 
            : <span className='pluseIcon' onClick={additems}>+</span>
        }
        
      </div>

        <div className="todo_list_wrapper">
            {
                items.map((currentElm)=>{
                    return(
                        <div className="todolist" key={currentElm.id}>
                            <h4>{currentElm.name}</h4>
                            <div className="listbtn">
                                <span onClick={()=> edititem(currentElm.id)}>Add</span>
                                <span onClick={()=> deleteFunc(currentElm.id)}>Del</span>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>

      <button className="checklisttbtn">Check list</button><br />
      <button className="checklisttbtn" onClick={removeall}>Remove list</button>
    </>
  )
}

export default Todo
