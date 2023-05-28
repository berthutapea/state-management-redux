import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [text, setText] = useState('');

  const onTextChangeHandler = ({ target }) => setText(target.value);

  return (
    <div>
      <input type="text" value={text} onChange={onTextChangeHandler} />
      <button onClick={() => addTodo(text)}>Add todo</button>
    </div>
  );
}

export default TodoInput;
