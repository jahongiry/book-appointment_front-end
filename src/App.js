import { useDispatch, useSelector } from "react-redux";
import { testActions } from "./store/test_reducer";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import LogIn from "./components/LogIn";
import Details from "./components/Details";

function App() {
  const dispatch = useDispatch();
  const testText = useSelector((state) => state.test.number);

  const textChange = () => {
    dispatch(testActions.testing());
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<LogIn />} />
          <Route path="/mainpage" exact element={<MainPage />} />
          <Route path="/details" exact element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
