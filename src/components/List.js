import React from 'react';

let style = {
  maxWidth: '700px',
};

const List = (props) => (
  <div className="list">
    {props.todos.map((todo, i) => {
      return <div className="list-item" style={style}>
        <div className="columns">
          <span className="label column label">{todo.title}</span>
          <div className="column">
            <button className="button is-primary" onClick={() => props.handleRemove(i)}>Delete</button>
          </div>
        </div>
      </div>
    })}
  </div>
);

export default List;
