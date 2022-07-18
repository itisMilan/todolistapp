import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");


const deleteTodo = (index)=>{
  var newList = toDos;
  newList.splice(index,1)
  setToDos([...newList])
}

   
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add toDo..."
        />
        <i
          className="fas fa-plus"
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj,index) => {
          return (
            <div className="todo">
              <div className="left">
                <input 
                  onChange={(e)=>{
                    console.log(e.target.checked);
                    console.log(obj)
                    setToDos(toDos.filter(obj2=>{
                      if(obj2.id===obj.id){
                        obj2.status=e.target.checked
                      }
                      return obj2
                    }))
                  }}
                  id={obj.id}
                  obj={obj.status}
                  type="checkbox"
                 
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={()=> deleteTodo(index)} ></i>
              </div>
            </div>
          );
        })}

       {toDos.map((obj)=>{
          if(obj.status){
            return <h1>{  obj.text} </h1>
          }
          return null
        })}
      </div>
    </div>
  );
}

export default App;
