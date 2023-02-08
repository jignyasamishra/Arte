
import './App.css';
import Navbar from './Components/Navbar';
import Socials from './Components/Socials';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Architecture from './Components/Architecture';
import Modern from './Components/Modern';
import Loading from './Components/Loading';

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Navbar/> */}
      {/* <Socials/> */}


      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  exact path="/Architecture" element={<Architecture/>}/>
          <Route  exact path="/ModernArt" element={<Modern/>}/>
          <Route exact path="/Load" element={<Loading/>}/>
        
        </Routes>
      </Router>



    </>
  );
}

export default App;
