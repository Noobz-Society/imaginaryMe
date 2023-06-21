import './App.css';
import { Routes ,Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import CreateAvatar from './pages/CreateAvatar';
import Community from './pages/Community';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/Profile'
import { AuthProvider } from './AuthContext';
import EditUser from './pages/EditUser'
import Protected from './ProtectedRoutes';

function App() {
 
 
  return (
    <AuthProvider>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/create" element={<CreateAvatar />} />
          <Route exact path="/community" element={<Community />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/editUser" element={<EditUser />} />

          <Route
            path="/profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
        </Routes>
        <Footer/>
    </AuthProvider>
     
      
  );
}

export default App;

