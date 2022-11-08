import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteCarAction } from '../store/mainpage_reducer';
import './RemoveCars.css';

const Remove = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);

  return (
    <div className="main">
      <h1>Remove cars from list</h1>

      <div className="res-contain remove-container">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Car model</th>
              <th scope="col">Price</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id} className="lines">
                <td>{car.name}</td>
                <td>{car.cost}</td>
                <th scope="col">
                  <button
                    className="remove-btn"
                    type="submit"
                    onClick={() => dispatch(deleteCarAction(car.id))(
                      window.location.reload(false),
                    )}
                  >
                    <FontAwesomeIcon icon={faTrash} className="trashcan" />
                    remove
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Remove;
