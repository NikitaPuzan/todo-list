import React from 'react'
import style from './TitleTodo.module.css'

const TitleTodo = ({text, changeTodo, addTodo}) => {
  return (
      <div className={style.title}>
        <h1>Todos</h1>
        <input type="text" value={text} onChange={e => changeTodo(e)} onKeyDown={(e) => addTodo(e)}/>
      </div>
      
  )
}
export default TitleTodo