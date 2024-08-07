import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { ResultsPage } from './components/ResultsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage/>}>
          </Route>
          <Route path="/results" exact element={<ResultsPage/>}>
          </Route>
          <Route path="/about">
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
