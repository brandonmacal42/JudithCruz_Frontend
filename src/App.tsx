import { Routes, Route, Navigate } from 'react-router-dom';
import './assets/styles/App.css';
import Main from './pages/Main/main'; // Importa la página principal

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<Main />} />
      </Routes>

  );
}

export default App;
