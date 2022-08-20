import React from "react";
import "../todo.css";
import { useState } from "react";
import {useAuth} from '../Context/AuthContext.js';
import {link,useNavigate} from 'react-router-dom';
function Todolist() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const {logout}=useAuth();
  const[error,setError]=useState();
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();

  async function handleLogOut(){
 
   try{
    setError("")
    setLoading(false)
    await logout ()
    navigate('/login')
   }
   catch{
     setError("Failed To Log Out")
     setLoading(false);
   }
  }
const deleteTodo = (index)=>{
  var newList = toDos;
  newList.splice(index,1)
  setToDos([...newList])
}

   
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
        {error}
      </div>
      <div className="subHeading">
        <br />
        <h2>  Set Your Task Now 🌝 ☕ </h2>
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
          <button disabled={loading}onClick={()=>handleLogOut()}>Logout</button>
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

     
      </div>
    </div>
  );
}

export default Todolist;
