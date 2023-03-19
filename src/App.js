import {BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from './pages/home/Home.jsx'
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <Router>
      <NavBar/>
      <Home/>
      <Footer/>
    </Router>
  );
}


export default App;
