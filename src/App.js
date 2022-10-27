import { useDispatch, useSelector } from "react-redux";
import { testActions } from "./store/test_reducer";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const testText = useSelector((state) => state.test.number);

  const textChange = () => {
    dispatch(testActions.testing());
  };

  return (
    <div className="App">
      <header className="App-header">
        <p></p>
        Final Capstone Set up!
        <button onClick={textChange}>Change text</button>
        <p className="text">This is test number {testText}</p>
      </header>
    </div>
  );
}

export default App;
