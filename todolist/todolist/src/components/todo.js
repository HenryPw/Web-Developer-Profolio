import React from "react"; 

export default function Todos({ todos, toggleTodos }) {
    function handleTodoClick() {
        toggleTodos(todos.id)
    }
    return (
        <div>
            <input type="checkbox" checked={todos.complete} onChange={handleTodoClick}/>
            {todos.name}
        </div>
    )
}

