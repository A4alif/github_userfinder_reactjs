import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
     <Router>
      <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main>
        <div>content</div>
      </main>
      </div>
      <Routes>
        <Route/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
