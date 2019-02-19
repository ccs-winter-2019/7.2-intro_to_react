import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 'use strict';

// function doSomething(){
//   console.log(this);
// }
// doSomething();
//
// var kepler = {
//   name: 'Kepler',
//   wag: function(){
//     console.log(this);
//   }
// };
//
// kepler.wag();
//
// var oz = {
//   name: 'Oz'
// }
//
// kepler.wag = kepler.wag.bind(oz);
// kepler.wag();

class TodoList extends Component{
  render(){

    var listItems = this.props.todos.map(function(todo, index){
      return <li key={index}>{todo}</li>;
    });

    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}

// class TodoForm extends Component{
//   render(){
//     return (
//       <form>
//         <input type="text" name="todo-name" />
//         <input type="submit" value="Add Todo"/>
//       </form>
//     );
//   }
// }


class TodoApp extends Component {
  constructor(props){
    super(props);

    this.availableTodos = [
      'Learn React',
      'Learn about "this"',
      'Make fried pickle spears/chips'
    ];

    this.addTodo = this.addTodo.bind(this);

    this.state = {todos: []};
  }

  addTodo(){
    var randomInt = getRandomInt(3);
    var randomTodo = this.availableTodos[randomInt];
    this.state.todos.push(randomTodo);
    this.setState({todos: this.state.todos});
  }

  render() {
    return (
      <div>
        <h1>Todo App!!!</h1>
        <h2>Programming Todos</h2>

        <button onClick={this.addTodo}>Add Todo</button>

        <TodoList todos={this.state.todos} deadline="yesterday"/>
        
        {/*component = new TodoLIst();*/}
        {/*component.props.todos = this.state.todos*/}
        {/*component.props.deadline = "yesterday"*/}
        {/*component.props.number = 10*/}
        {/*component.render()*/}
        
      </div>
    );
  }
}

// Utility function to get a random int
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default TodoApp;
