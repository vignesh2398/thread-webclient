import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/login/loginpage.js';
import Homepage from './components/homepage/homepage.js';

function App() {
  return (
    <div className="App">
           <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
