import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Card from "./Components/Card/Card";
import Works from "./Components/Works/Works";
import Footer from "./Components/Footer/Footer";
import './App.css'
import Experience from "./Components/Experience/Experience";
import Portfolio from "./Components/Portfolio/Portfolio";
import Education from "./Components/Education/Education";
import Awards from "./Components/Awards/Awards";
import Contacts from "./Components/Contacts/Contacts";
import  {themeContext} from './Context';
import { useContext } from "react";
function App() {
  const theme =useContext(themeContext)
  const darkMode =theme.state.darkMode;
  return (
    <div className="App"
    style ={{
background:darkMode ? 'black': '',
color: darkMode ? 'white': '',


    }}
    
    
    >
  <Navbar />
  <Intro/>
  <Services />
  <Card />
  <Experience />
  <Works/>
  <Portfolio />
  <Education />
  <Awards />
  <Contacts />
  <Footer />
    
    </div>
    




  );
}

export default App;
