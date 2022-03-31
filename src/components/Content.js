import React, {useState} from 'react';
import { IconButton, Radio} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import style from './Content.module.css'


const Content = () => {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  const changeTodos = e => {
    setText(e.target.value)
  }

  const addTodo = (e) => {
    if (e.keyCode === 13) {
      setTodos([text, ...todos])
      setText('')
    }
  }
  return (
    <div className={style.container}>
      <h1>Todos</h1>
      <input type="text" value={text} onChange={e => changeTodos(e)} onKeyDown={(e) => addTodo(e)}/>
      {todos && todos.map((todo, index) => <div className={style.todo} key={index}>
        <input type="checkbox"/>
        <p>{todo}</p>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>)}
    </div>
  );
};

export default Content;
