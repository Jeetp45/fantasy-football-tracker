import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar.tsx';
import Home from './dashboard/Home.tsx';
import LeaderboardDashboard from './dashboard/LeaderboardDashboard.tsx';
import HistoryDashboard from './dashboard/HistoryDashboard.tsx';
import VersusDashboard from './dashboard/VersusDashboard.tsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/leaderboard' element={<LeaderboardDashboard />} />
        <Route path='/history' element={<HistoryDashboard />} />
        <Route path='/versus' element={<VersusDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
