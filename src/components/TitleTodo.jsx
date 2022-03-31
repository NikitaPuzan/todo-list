import React from 'react'
import style from './TitleTodo.module.css'
import { TextField} from "@mui/material";

const TitleTodo = ({text, changeTodo, addTodo}) => {
  return (
      <div className={style.title}>
        <h1>Todos</h1>
        <TextField
               value={text}
               onChange={e => changeTodo(e)}
               onKeyDown={(e) => addTodo(e)}
               placeholder="Enter your todos"
               variant="outlined"
               size="small"
               color="primary"
        />
      </div>
  )
}
export default TitleTodo