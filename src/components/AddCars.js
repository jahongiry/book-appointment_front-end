import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNewCar } from '../store/mainpage_reducer';
import './AddCars.css';

function AddCars() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = JSON.parse(window.localStorage.getItem('user'));
  const userid = userId;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [image, setImage] = useState('');

  const newCar = (e) => {
    e.preventDefault();
    dispatch(createNewCar({
      name,
      description,
      price,
      image,
      userid,
    }));
    setName('');
    setDescription('');
    setPrice();
    setImage('');
    navigate('/mainpage');
  };

  return (
    <div className="addcar-container">
      <h1 className="heading-for-add">Add Luxury cars to sell</h1>
      <form className="email-login add-car-form" onSubmit={newCar}>
        <label htmlFor="name">
          <input
            id="name"
            className="input-email"
            type="text"
            name="username"
            placeholder="Enter Car Name ..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="description">
          <input
            id="description"
            className="input-email"
            type="text"
            name="description"
            placeholder="Enter Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label htmlFor="price">
          <input
            id="price"
            className="input-email"
            type="number"
            name="username"
            placeholder="Price in US dollars $..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label htmlFor="image" className="linkcars">
          <input
            id="image"
            className="input-email"
            type="text"
            name="username"
            placeholder="Link of picture of the car..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCars;
