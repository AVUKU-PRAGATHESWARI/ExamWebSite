import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Svportal from "./components/Svportal";
import Admin from './components/Admin';
import User from './components/User';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Svportal />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
