import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './components/login/loginpage.js';
import Homepage from './components/homepage/homepage.js';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
           <Routes>
           {/* <Route path="/" element={ navigate('/login')} /> */}
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
