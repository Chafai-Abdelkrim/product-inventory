import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Forgot from './pages/auth/Forgot';
import Reset from './pages/auth/Reset';
import { SET_LOGIN } from './redux/features/auth/authSlice';
import { getLoginStatus } from './services/authService';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/resetpassword/:resetToken" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
