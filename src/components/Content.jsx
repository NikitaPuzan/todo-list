import React, {useState} from 'react';
import style from './Content.module.css'
import TitleTodo from './TitleTodo'
import Todo from './Todo'

const Content = () => {
  const [todos, setTodos] = useState(
    [{
      text: "Learn React",
      isCompleted: false
    }, {
      text: "Learn Redux-saga, Toolkit",
      isCompleted: false
    }, {
      text: "Learn English",
      isCompleted: false
    }]
  )
  const [text, setText] = useState('')

  const changeTodo = e => {
    setText(e.target.value)
  }
  const addTodo = (e) => {
    if (e.target.value) {
      if (e.keyCode === 13) {
        setTodos([{text}, ...todos])
        setText('')
      }
    }
  }
  const deleteTodo = indexToDelete => {
    setTodos(todos.filter((_, index) => index !== indexToDelete))
  }

  return (
    <div className={style.container}>
      <TitleTodo text={text} changeTodo={changeTodo} addTodo={addTodo}/>
      <Todo todos={todos} deleteTodo={deleteTodo} setTodos={setTodos}/>
    </div>
  );
};

export default Content;
