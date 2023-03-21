import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Missions from './components/Mission';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

