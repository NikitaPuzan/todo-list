import React from 'react'
import style from './Todo.module.css'
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const Todo = ({todos, deleteTodo, setTodos}) => {

  const handler = index => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo);
  }

  return <>
    {todos.map((todo, index) => <div className={style.todo} key={index}>
      <div className={style.todoContent}>
        <input type="checkbox" value={todo.isCompleted} onChange={() => handler(index)}/>
        <p className={todo.isCompleted ? style.changeTodo : ''}>{todo.text}</p>
      </div>
        <IconButton aria-label="delete" color="error" onClick={() => deleteTodo(index)}>
          <DeleteIcon/>
        </IconButton>
    </div>)}
  </>
}

export default Todo