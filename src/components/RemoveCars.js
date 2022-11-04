import React from "react";
import "./Reservations.css";
import { useSelector } from "react-redux";

const Remove = () => {
  const id = useSelector((state) => state.mainPage.id);
  const name = useSelector((state) => state.mainPage.name);
  const price = useSelector((state) => state.mainPage.price);

  return (
    <div className="main">
      <h1>Remove cars from list</h1>

      <div className="res-contain">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Car model</th>
              <th scope="col">Price</th>
              <th scope="col">action</th>
            </tr>
          </thead>

          <tbody>
            <th scope="col">{id}</th>
            <th scope="col">{name}</th>
            <th scope="col">{price}</th>
            <th scope="col">remove</th>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Remove;
