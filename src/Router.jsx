import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/Signup/SignupPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/Signup" element={<SignupPage />}></Route>
    </Routes>
  );
}
