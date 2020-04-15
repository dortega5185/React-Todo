import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    handleChanges = e => {
        this.setState({ item: e.target.value })
    }

    submitTodo = e => {
        e.preventDefault()
        this.setState({ item: '' })
        this.props.addTodo(e, this.state.item)
    }

    render() {
        return (
          <form onSubmit={this.submitTodo}>
            <label htmlFor='item'>
              <input 
              type="text"
              value={this.state.item}
              placeholder="Your To-Dos"
              name="item"
              onChange={this.handleChanges}
              />
            </label>
            <button className="add-btn">Add Todo</button>
            <button className="clear-btn" onClick={this.props.clearCompleted}>Clear Completed</button>
          </form>
        );
    }
}

export default TodoForm;