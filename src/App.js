import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Users from './Pages/Home/Users/Users';
import Login from './Pages/Home/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
