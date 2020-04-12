import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
        todos
    }
  }

  addTodo = (e, item) => {
    e.preventDefault()
    const newTodo = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
  

  toggleTodo = itemId => {
    console.log(itemId)
    // map over array
    // when we find the item we clicked, toggle the purchased field
    // otherwise return the item untouched
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault()
    // if todo is completed (item.completed is true) then filter out
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    })
  }

  render() {
    console.log('rendering...')
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <TodoList 
          todos={this.state.todos} 
          toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
