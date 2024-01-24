import React, { useEffect } from "react";
import Table from "./Table";
import { listDots } from "../../service/DotService";
import Form from "./Form";
import Graph from "./Graph";
import { useSelector, useDispatch } from "react-redux";
import { addDotRedux, setUser } from "../../redux_files/actions";

const MainPage = () => {
  const dispatch = useDispatch();
  const dotsList = useSelector((state) => state.dotsList);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      setUser({
        login: localStorage.getItem("login"),
        password: localStorage.getItem("password"),
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      listDots(user)
        .then((response) => {
          response.data.forEach((dot) => dispatch(addDotRedux(dot)));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user, dispatch]);

  return (
    <div className="main-container">
      <div className="row justify-content-center g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <Form />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <Graph size={400} />
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="row justify-content-center">
        <div className="col-table">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <Table dotsList={dotsList} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default MainPage;
