import React from "react";

const Form = (props) => (
  <div className="container">
    <form className="simple-form" onSubmit={props.handleAdd}>
      <div className="columns">
          <div className="label column" style={{"white-space":"nowrap;"}}>Your todo:</div>
          <div className="control column">
            <input type="text" className="text" name="title"/>
          </div>
          <div className="control column">
            <input type="submit" value="Add" className="button is-primary"/>
          </div>
      </div>
    </form>
  </div>
);

export default Form;
