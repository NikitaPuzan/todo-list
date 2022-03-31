import React  from 'react'
import style from './Todo.module.css'
import { IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({todos, deleteTodo}) => {
  //const [toggle, setToggle] = useState(false)

//   const handler = index => {
//       setToggle(!toggle)
//   }
//value={toggle} onChange={() => handler(index)}
//className={toggle ? style.changeTodo : ''}
  return  <>
    {todos.map((todo, index) =><div className={style.todo} key={index}>
        <div className={style.todoContent}>
          <input type="checkbox" />
          <p >{todo}</p>
        </div>  
        <IconButton aria-label="delete" onClick={() => deleteTodo(index)}>
          <DeleteIcon/>
        </IconButton>
      </div>)}
      </>
}

export default Todo