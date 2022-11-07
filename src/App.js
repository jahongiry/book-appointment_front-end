import React , {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { testActions } from "./store/test_reducer";
import "./App.css";
import Navbar from "./components/Navbar";

import MainPage from "./components/MainPage";
import LogIn from "./components/LogIn";

import Details from "./components/Details";
import Reservations from "./components/Reservations";
import ReserveForm from "./components/ReserveForm";
import AddCars from "./components/AddCars";
import Remove from "./components/RemoveCars";
import Register from "./components/signup";
import { fetchAllCars } from "./store/mainpage_reducer";


function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchAllCars())
  } , [dispatch])

  const logIn = JSON.parse(localStorage.getItem("user")) || state;

  console.log(logIn.loggedIn);
  return (
    <div className="App">
      <Router>
        {logIn.loggedIn === "in" && <Navbar />}
        <Routes>
          <Route path="/reservations" exact element={<Reservations />} />
          <Route path="/" exact element={<LogIn />} />
          <Route path="/mainpage" exact element={<MainPage />} />
          <Route path="/reserve_form" exact element={<ReserveForm />} />
          <Route path="/details/:id" exact element={<Details />} />
          <Route path="/addcars" exact element={<AddCars />} />
          <Route path="/removecar" exact element={<Remove />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
