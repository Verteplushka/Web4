import React, { useEffect, useState } from "react";
import Table from "./Table";
import { listDots } from "../../service/DotService";

const MainPage = () => {
  const [dotsList, setDotsList] = useState([]);
  useEffect(() => {
    listDots()
      .then((response) => {
        setDotsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
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
