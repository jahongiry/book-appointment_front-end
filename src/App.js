import { useDispatch, useSelector } from "react-redux";
import { testActions } from "./store/test_reducer";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";

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
          <Route path="/" exact element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
