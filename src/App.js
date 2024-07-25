import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
// pages & comps
import Dashboard from './pages/dashboard/Dashboard';
import Create from "./pages/create/Create";
import Login from "./pages/login/login";
import Project from "./pages/project/project";
import Signup from "./pages/signup/signup";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
        <div className="container">
        <Navbar></Navbar>
          <Routes>
            <Route path="/" Component={Dashboard} />
            <Route path="/project/:id" Component={Project} />
            <Route path="/create" Component={Create} />
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={Signup} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
