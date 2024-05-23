import React from 'react';

function Container({ todo,index,delToDo }) {
  return (
    <div className='todo'>
      <p>{todo}</p>
      <div className='action'>
        <input type='checkbox' />
        <button onClick={()=>delToDo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Container;
