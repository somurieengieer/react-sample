import React from "react";

const Form = (props) => (
  <div>
    <form className="simple-form">
      <div className="field">
        <label className="label">Your todo:</label>
        <div className="control">
          <input type="text" className="text" name="title"/>
        </div>
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
);

export default Form;
