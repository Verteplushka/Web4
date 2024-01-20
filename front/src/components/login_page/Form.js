import React, { useState } from "react";
import { addUser, checkUser } from "../../service/UserService";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigator = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const checkForm = () => {
    if (login === "") {
      alert("Login mustn't be empty");
      return false;
    }
    if (password === "") {
      alert("Password mustn't be empty");
      return false;
    }
    return true;
  };

  const singUp = () => {
    if (!checkForm()) return;
    addUser({ login: login, password: password }).then((response) =>
      response.data
        ? navigator("/main_page")
        : alert("User with login " + login + " already exists")
    );
  };

  const logIn = () => {
    if (!checkForm()) return;
    checkUser({ login: login, password: password }).then((response) =>
      response.data
        ? navigator("/main_page")
        : alert("Invalid login or password")
    );
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="login">Login</label>
        <input
          type="text"
          className="form-control"
          id="login"
          placeholder="enter your login here"
          value={login}
          onChange={handleLogin}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="enter your password here"
          value={password}
          onChange={handlePassword}
        />
      </div>

      <button type="button" className="btn btn-primary" onClick={singUp}>
        Sign up
      </button>
      <button type="button" className="btn btn-primary" onClick={logIn}>
        Log in
      </button>
    </form>
  );
};

export default Form;
