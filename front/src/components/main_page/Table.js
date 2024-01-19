import React from "react";

const Table = ({ dotsList }) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">№</th>
          <th scope="col">X</th>
          <th scope="col">Y</th>
          <th scope="col">R</th>
          <th scope="col">current time</th>
          <th scope="col">script time</th>
          <th scope="col">result</th>
        </tr>
      </thead>
      <tbody>
        {dotsList.map((dot, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{dot.x}</td>
            <td>{dot.y}</td>
            <td>{dot.r}</td>
            <td>{dot.currentTime}</td>
            <td>{dot.scriptTime}</td>
            <td>{dot.result}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
