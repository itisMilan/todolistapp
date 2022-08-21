import React, { useEffect, useState } from "react";
import "../Todolist.css";
import { useAuth } from "../Context/AuthContext";
import {useNavigate} from 'react-router-dom'

export default function Todolist() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const {logout}=useAuth();
  const [error,setError]=useState('');
  const [loading,setLoading]=useState('');
  const navigate = useNavigate();
  const LOCAL_STORAGE_KEY ="todoapp.todos";
  useEffect(()=>{
  const storedTodos=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos)
  },[])
  useEffect(()=>{
   localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])
  async function handleLogout(){
   try{
    setError("")
    setLoading(true)
    await logout();
    navigate('/login')
   }
   catch{
     setError("Failed To Log Out")
     setLoading(false);
   }
  }

  function createNewTodo(currentTodo) {
    let todosArray = [...todos];
    todosArray.push({ todo: currentTodo, isCompleted: false });
    setTodos(todosArray);
  }
  function completeTodo(index) {
    let todosArray = [...todos];
    todosArray[index].isCompleted = !todosArray[index].isCompleted;
    setTodos(todosArray);
  }
  function deleteTodo(index) {
    let todosArray = [...todos];
    todosArray.splice(index, 1);
    setTodos(todosArray);
  }
  function clearallTodo() {
    return setTodos([]);
  }
  return (
    <>
      {/* Created By CodingNepal - www.codingnepalweb.com */}
      {/* <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      {/* <title>Todo App JavaScript | CodingNepal</title> */}
      <link rel="stylesheet" href="style.css" />
      <div className="wrapper">
        <header>Todo App</header>
        <div className="inputField">
          <input
            type="text"
            placeholder="Add your new todo"
            className="todo-input"
            value={currentTodo}
            onChange={(e) => {
              setCurrentTodo(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                createNewTodo(currentTodo);
                setCurrentTodo("");
              }
            }}
          />
          <button onClick={() => createNewTodo(currentTodo)}>
            <i className="fas fa-plus" />
          </button>
        </div>
        <ul className="todoList">
          {todos.map((todo, index) => {
            return (
              <span key={todo} className="todo">
                <li>
                  <button type="checkbox"
                    className="checkbox" 
                    onClick={() => completeTodo(index)}
                  >
                    {todo.isCompleted && <span> &#x2714; </span>}
                  </button>
                  <span className={todo.isCompleted ? "done" : ""}  >
                    {todo.todo}
                  </span>
                  <button className="icon" onClick={(e) => deleteTodo(index)}>
                    &#128465;
                  </button>
                </li>
              </span>
            );
          })}
        </ul>
        <div className="footer">
          <span>
            You have <span className="pendingTasks" /> {todos.length}
            -pending tasks
          </span>
          <button onClick={() => clearallTodo()}>Clear All</button>
        </div>
        <button className="logout" disabled={loading} onClick={()=>handleLogout()}>Log Out</button>
        {error}
      </div>
      {/*  */}
    </>
  );
}
