import React from "react"; 
import Todo from "./todo"

export default function TodoList({ todos, toggleTodos }) {
    return ( 
        <div>
            this is from todolist
            {todos && todos.map(todos => {
                    return  <Todo key={todos.id} toggleTodos={toggleTodos} todos={todos} />                      
            })}
        </div>
    )  
}

