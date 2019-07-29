import React from 'react';

let style = {
  maxWidth: '700px',
};

const List = (props) => (
  <div className="list">
    <div className="list-item columns" style={style}>
      <span className="label column">Item 1</span>
      <div className="column">
        <button className="button is-primary">Delete</button>
      </div>
    </div>
    <div className="list-item columns" style={style}>
      <span className="label column">Item 2</span>
      <div className="column">
        <button className="button is-primary">Delete</button>
      </div>
    </div>
    <div className="list-item columns" style={style}>
      <span className="label column">Item 3</span>
      <div className="column">
        <button className="button is-primary">Delete</button>
      </div>
    </div>
  </div>
);

export default List;
