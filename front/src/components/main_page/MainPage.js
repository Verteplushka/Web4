import React, { useEffect } from "react";
import Table from "./Table";
import { listDots } from "../../service/DotService";
import Form from "./Form";
import Graph from "./Graph";
import { useSelector, useDispatch } from "react-redux";
import { addDotRedux } from "../../redux/actions";

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
    <>
      <div className="container">
        <Form />
      </div>

      <div className="container">
        <Graph />
      </div>

      <div className="container">
        <Table dotsList={dotsList} />
      </div>
      <div className="container">
        <a href="/login_page" className="btn btn-primary">
          Sign out
        </a>
      </div>
    </>
  );
};

export default MainPage;
