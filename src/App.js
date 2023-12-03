import { Route, Routes  } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact2 from './components/Contact2';





function App() {
  return (
    <div className='app'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route  path='/RaimathPortfolio' element={<Home/>}/>
      <Route  path='/home' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/projects' element={<Projects/>}/>
      <Route  path='/contact' element={<Contact2/>}/>
    </Routes>
    <Footer/>
    
    </div>
  );
}

export default App;
