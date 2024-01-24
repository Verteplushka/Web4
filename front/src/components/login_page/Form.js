import React, { useState } from "react";
import Input from "react-toolbox/lib/input";
import { Button } from "react-toolbox/lib/button";
import { addUser, checkUser } from "../../service/UserService";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

const Form = () => {
  const navigator = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (value) => {
    setLogin(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const checkForm = () => {
    if (login === "") {
      toast.error("Username mustn't be empty");
      return false;
    }
    if (password === "") {
      toast.error("Password mustn't be empty");
      return false;
    }
    return true;
  };

  const singUp = () => {
    if (!checkForm()) return;
    addUser({ login: login, password: password })
      .then((response) =>
        response.data
          ? navigator("/main_page")
          : toast.error('User with login "' + login + '" already exists')
      )
      .then(() => {
        localStorage.setItem("login", login);
        localStorage.setItem("password", password);
      });
  };

  const logIn = () => {
    if (!checkForm()) return;
    checkUser({ login: login, password: password })
      .then((response) =>
        response.data
          ? navigator("/main_page")
          : toast.error("Wrong login or password")
      )
      .then(() => {
        localStorage.setItem("login", login);
        localStorage.setItem("password", password);
      });
  };

  return (
    <>
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <br />
          <h2 className="text-center">Sign in or Log in</h2>

          <div className="card-body">
            <form>
              <div className="form-group ">
                <label className="form-label" htmlFor="login">
                  Username
                </label>
                <Input
                  type="text"
                  id="login"
                  placeholder="enter your login here"
                  value={login}
                  onChange={handleLogin}
                  style={{ width: "100%" }}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  placeholder="enter your password here"
                  value={password}
                  onChange={handlePassword}
                  style={{ width: "100%" }}
                />
              </div>

              <br />

              <div className="d-flex">
                <Button
                  className="btn btn-dark"
                  label="Sign up"
                  onClick={singUp}
                  style={{ marginRight: "8px" }}
                />

                <Button
                  className="btn btn-dark"
                  label="Log in"
                  onClick={logIn}
                />
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
      <Toaster richColors />
    </>
  );
};

export default Form;
