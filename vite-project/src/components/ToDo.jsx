import React from 'react';
import Container from './Container';

function ToDo({ todos,delToDo }) {
  return (
    <div className='container'>
       {todos.map((todo,index)=>{
        return(
          <Container todo={todo} index={index} delToDo={delToDo}/>
        )
       })}
        
    </div>
  );
}

export default ToDo;
