import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }){
    return <ul className="list">
    {todos.map(todo =>{
      return(
        <TodoItem {...todo}
        // id={todo.id} 
        // completed={todo.completed} 
        // title={todo.title} 
        key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}
         />
    //     <li key={todo.id}>
    //   <label>
    //     <input type="checkbox"  checked={todo.completed} 
    //     //onChange={e => toggleTodo(todo.id, e.target.checked)}
    //     />
    //     {todo.title}
    //   </label>
    //   <button 
    //   //onClick={() => deleteTodo(todo.id)}  
    //   className="btn btn-danger">Delete</button>
    // </li>
      )
    })}
    
    
  </ul>
}