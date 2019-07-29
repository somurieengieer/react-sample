import React, {Component} from 'react';
import './App.css';
import Form from './Form.js';
import List from './List.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd(e) {
    e.preventDefault(); //リダイレクト防止
    this.state.todo.push({title: e.target.title.value});
    this.setState({todo: this.state.todo});
    e.target.title.value='';
  }

  handleRemove(i) {
    this.state.todo.splice(i, 1);
    this.setState({todo: this.state.todo});
  }

  render() {
    return (
      <div className="App">
        <Form handleAdd={this.handleAdd}/>
        <hr/>
        <List todos={this.state.todo} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}

