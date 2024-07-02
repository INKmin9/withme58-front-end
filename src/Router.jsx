import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
    </Routes>
  );
}
