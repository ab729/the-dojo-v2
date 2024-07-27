import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';


// pages & comps
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
// pages
import Dashboard from './pages/dashboard/Dashboard';
import Create from "./pages/create/Create";
import Login from "./pages/login/login";
import Project from "./pages/project/project";
import Signup from "./pages/signup/signup";


function App() {
  const { user, authIsReady } = useAuthContext()


  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar></Navbar>
            <Routes>
              {!user && <Route path="/" element={<Navigate to="/login" />} />}
              {user && <Route path="/" Component={Dashboard} />}

              <Route path="/project/:id" Component={Project} />
              <Route path="/create" Component={Create} />

              {user && <Route path="/login" element={<Navigate to="/" />} />}
              {!user && <Route path="/login" Component={Login} />}

              {!user && <Route path="/signup" Component={Signup} />}
              {user && <Route path="/signup" element={<Navigate to="/" />} />}
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
