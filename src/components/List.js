import React from 'react';

let style = {
  maxWidth: '700px',
};

const List = (props) => (
  <div className="list">
    {props.todos.map((todo, i) => {
      return <div className="list-item columns" style={style}>
        <span className="label column">{todo.title}</span>
        <div className="column">
          <button className="button is-primary">Delete</button>
        </div>
      </div>
    })};
  </div>
);

export default List;
