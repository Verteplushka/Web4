import React from "react";
import Table from "./Table";

const MainPage = () => {
  const dummData = [
    {
      id: 191,
      x: 1.8,
      y: -1.25,
      r: 3,
      currentTime: "2023-12-27",
      scriptTime: 10000,
      result: "hit",
    },
    {
      id: 192,
      x: -1.8,
      y: 1.9,
      r: 3,
      currentTime: "2023-12-27",
      scriptTime: 9984,
      result: "miss",
    },
    {
      id: 193,
      x: -2.9,
      y: -1.85,
      r: 3,
      currentTime: "2023-12-27",
      scriptTime: 8467,
      result: "miss",
    },
    {
      id: 194,
      x: 2.25,
      y: -1.55,
      r: 3,
      currentTime: "2023-12-27",
      scriptTime: 9061,
      result: "miss",
    },
    {
      id: 195,
      x: 0.35,
      y: -1.9,
      r: 3,
      currentTime: "2023-12-27",
      scriptTime: 9133,
      result: "miss",
    },
    {
      id: 196,
      x: -1.95,
      y: -1.2,
      r: 3,
      currentTime: "2023-12-27",
      scriptTime: 8624,
      result: "miss",
    },
    {
      id: 197,
      x: -3.85,
      y: 2.1,
      r: 3,
      currentTime: "2023-12-27",
      scriptTime: 8776,
      result: "miss",
    },
    {
      id: 190,
      x: 0.7,
      y: 2.25,
      r: 3,
      currentTime: "2023-12-27",
      scriptTime: 64498,
      result: "hit",
    },
    {
      id: 198,
      x: 12.34,
      y: 56.78,
      r: 5,
      currentTime: "2024-01-01",
      scriptTime: 9876543210,
      result: "hit",
    },
    {
      id: 199,
      x: 12.34,
      y: 56.78,
      r: 5,
      currentTime: "2024-01-01",
      scriptTime: 9876543210,
      result: "hit",
    },
    {
      id: 200,
      x: 12.34,
      y: 56.78,
      r: 5,
      currentTime: "2024-01-01",
      scriptTime: 9876543210,
      result: "hit",
    },
  ];
  return (
    <>
      <div className="container">
        <Table dotsList={dummData} />
      </div>
      <div className="container">
        <a href="/login_page" class="btn btn-primary">
          Sign out
        </a>
      </div>
    </>
  );
};

export default MainPage;
