import React, {useState, useRef, useEffect} from 'react';
import TodoList from "./todolist";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function TodoPage() {
    const [todos, setTodos] = useState([{ id: 1, name: 'todo 1', complete: false}]);
    const todoNameRef = useRef(null)

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
    }, [todos])


    function toggleTodo(id) {
        const newTodos = [...todos]
        const todos = newTodos.find(todos => todos.id === id)
        todos.complete = !todos.complete
        setTodos(newTodos)
    }
    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, {id:1, name: name, complete:false}]
        })
        todoNameRef.current.value = null
    }

    function clearTodo() {
        const newTodos = todos.filter(todos => !todos.complete)
        setTodos(newTodos)
    }
         return(
             <div>
                 <TodoList todos={todos} toggleTodo={toggleTodo}/>
                 <br/>
                 <input ref={todoNameRef} type="text"/>
                 <br/>
                 <button onClick={handleAddTodo}>Add to do</button>
                 <button onClick={clearTodo}>Clear Todos</button>
                 <div> {todos.filter(todos => !todos.complete).length} Left to do</div>                 
             </div>
         )
     }

export default TodoPage;