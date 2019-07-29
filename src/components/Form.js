import React from "react";

const Form = (props) => (
  <div>
    <form className="simple-form" onSubmit={props.handleAdd}>
      <div className="field">
        <label className="label">Your todo:</label>
        <div className="control">
          <input type="text" className="text" name="title"/>
        </div>
        <div className="control">
          <input type="submit" value="Add" className="button is-primary"/>
        </div>
      </div>
    </form>
  </div>
);

export default Form;
