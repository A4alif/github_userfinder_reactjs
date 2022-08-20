import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
     <Router>
      <div className='flex flex-col justify-between h-screen'>
      <Navbar title="Github Finder" />
      <main className='container mx-auto px-4 pb-14'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/notfound' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      </div>
      </Router>
    </>
  );
}

export default App;
