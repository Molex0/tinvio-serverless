import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from './pages/home/Home.jsx'
import Features from "./pages/Features/Features.jsx";
import Company from "./pages/Company/Company.jsx";
import Policy from './pages/Policy/Policy.jsx';
import Terms from './pages/Policy/Terms.jsx';
function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/terms' element={<Terms/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}


export default App;
