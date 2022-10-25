import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Rider from './pages/Rider';
import Profile from './pages/Profile';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<div>
          <Link to={"/rider"}>
          
          <button>Go to rider page</button>
          </Link>

          <Link to={"/Profile"}>
          
          <button>Go to Profile page</button>
          </Link>

        </div>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/rider" element={<Rider></Rider>}></Route>
      </Routes>
    </div>
  );
}

export default App;
