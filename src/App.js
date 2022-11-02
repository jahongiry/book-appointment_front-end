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

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/reservatons" exact element={<Reservations />} />
          <Route path="/" exact element={<LogIn />} />
          <Route path="/mainpage" exact element={<MainPage />} />

          <Route path="/reserve_form" exact element={<ReserveForm />} />

          <Route path="/details" exact element={<Details />} />
          <Route path="/addcars" exact element={<AddCars />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
