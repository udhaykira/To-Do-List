import React from 'react';

function InputContainer({ inputVal, text, addTodo }) {
  return (
    <div className='input_container'>
      <input type="text" value={inputVal} onChange={text} />
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default InputContainer;
