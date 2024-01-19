import React from "react";
import Table from "./Table";

const MainPage = () => {
  return (
    <>
      <div>
        <Table />
      </div>
      <a href="/login_page" class="btn btn-primary">
        Sign out
      </a>
    </>
  );
};

export default MainPage;
