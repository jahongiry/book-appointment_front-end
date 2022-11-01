import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { testActions } from './store/test_reducer';
import './App.css';
import Navbar from './components/Navbar';

import MainPage from './components/MainPage';
import Reservations from './components/Reservations';

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
          <Route path="/reservatons" exact element={<Reservations />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
