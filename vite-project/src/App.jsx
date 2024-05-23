import { useState } from 'react';
import './App.css';
import InputContainer from './components/InputContainer';
import ToDo from './components/ToDo';
function App() {
  const [inputVal , setInputVal] = useState('')
  const [todos , setTodos] = useState([])
  function text(e){
    setInputVal(e.target.value)
  }
  function addTodo(){
    if(inputVal != ''){
      setTodos((prevTodos) => [...prevTodos ,inputVal])
      setInputVal('')
    }
  }
  console.log(todos)
  function delToDo(todoIndex){
    setTodos((prevTodos) => prevTodos.filter((prevTodos,prevTodosIndex)=>{return prevTodosIndex != todoIndex}))
  }
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer inputVal={inputVal} text={text} addTodo={addTodo}/>
      <ToDo todos={todos} delToDo={delToDo}/>
    </main>
  );
}

export default App;
