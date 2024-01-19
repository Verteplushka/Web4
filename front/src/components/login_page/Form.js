import React from "react";

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <input
          type="text"
          className="form-control"
          id="login"
          placeholder="enter your login here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="enter your password here"
        />
      </div>

      <button type="button" className="btn btn-primary">
        Sign up
      </button>
      <button type="button" className="btn btn-primary">
        Log in
      </button>
    </form>
  );
};

export default Form;
