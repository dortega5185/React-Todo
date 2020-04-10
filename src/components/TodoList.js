import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    // const sortedList = props.todos.sort((a, b) => a.completed - b.completed)
    return (
        <div className="todo-list">
            {props.todos.map(item => (
                <Todo key={item.id} item={item} toggleTodo={props.toggleTodo} />
            ))}
        </div>
    )
}
export default TodoList;