import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Componen/navbars';
import Home from './Pages/Home';
import Galery from './Pages/Galery';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/galery' element={<Galery />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
