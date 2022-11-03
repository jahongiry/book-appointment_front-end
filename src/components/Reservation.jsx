import React from "react";
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const Reservation = (props) => {
  const { model, city, date } = props;

  return (
    <tr>
      <td>{model}</td>
      <td>{city}</td>
      <td>{date}</td>
      <td>
        <button type="submit" className="btn btn-success">
          Cancel Reservation
        </button>
      </td>
    </tr>
  );
};

export default Reservation;
