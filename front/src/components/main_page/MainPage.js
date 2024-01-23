import React, { useEffect } from "react";
import Table from "./Table";
import { listDots } from "../../service/DotService";
import Form from "./Form";
import Graph from "./Graph";
import { useSelector, useDispatch } from "react-redux";
import { addDotRedux } from "../../redux_files/actions";

const MainPage = () => {
  const dotsList = useSelector((state) => state.dotsList);
  const dispatch = useDispatch();

  useEffect(() => {
    listDots()
      .then((response) => {
        response.data.forEach((dot) => dispatch(addDotRedux(dot)));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  return (
    <div className="main-container">
      <br /> <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <Form />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <Graph />
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <Table dotsList={dotsList} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
