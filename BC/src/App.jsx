import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/notFound/NotFound';
import Protected from './components/auth/Protected/Protected';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

      
        <Route element={<Protected isSignedIn={isLoggedIn} />}>
          <Route path="/library/*" element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;