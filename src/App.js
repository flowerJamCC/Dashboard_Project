import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import ResponsiveDrawer from './components/Navbar';
import Home from './pages/Home';
import Statistics from './pages/Statistics';
import Card from './components/Card';
import Topbar from './components/Topbar';
import Users from './pages/Users';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Documentation from './pages/Documentation';

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      {/* <Topbar /> */}
      <main>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/users' element={<Users />} />
        <Route path='/documentation' element={<Documentation />} />
        <Route path='/users/:id'  element={<Profile/>} />
      </Routes>
      <Footer />
      </main>
      
    </div>
  );
}

export default App;
