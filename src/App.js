import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { toDoList: [] }
  }

  componentDidMount () { //compDidMount only runs once just after the first render.
    fetch('/todos') // send the request to the server when the page is rendered to get the toDoList from the server and display it on the page.
    .then((response) => response.json()) //this is parsing the body/object being returned from /todos if it's not a sting.
    .then((data) => this.setState (st => { return { toDoList: data } }  )) //set the state of the toDoList as the data that we have parsed from the previous line
}

  add = () => { 
    this.setState(st => { return { toDoList: st.toDoList.concat(this.inp.value) } })
  }

  render() {
    return (
      <div className="App">
      <input ref={r => this.inp = r}></input>
      <button onClick={this.add}> Add new item to list </button>
        {this.state.toDoList.map(x => (<li> {x} </li>))}
      </div>
    );
  }
}

export default App;
