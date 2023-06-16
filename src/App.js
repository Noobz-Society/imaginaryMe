import './App.css';
import { Routes ,Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import Login from './pages/Login';
import Register from './pages/Register';
import CreateAvatar from './pages/CreateAvatar';
import Community from './pages/Community';
import Home from './pages/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
        <Navigation/>
     
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/free" element={<CreateAvatar />} />
        <Route exact path="/auth" element={<Community />} />
        <Route exact path="/connexion" element={<Login />} />
        <Route exact path="/register" element={<Register />} />


      </Routes></>
  );
}

export default App;

