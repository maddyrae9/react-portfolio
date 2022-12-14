import React, {useState} from 'react';
//import { NavLink } from "react-router-dom";
import './App.css';
import About from './components/About'
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
//import Footer from './components/Footer'
import Hero from './components/Hero'
import SocialLinks from './components/Footer'
import Resume from './components/Resume'

function App() {
  const [navLinks] = useState([
    {
      name: 'Home'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'About-me'
    },
    {
      name: 'Resume'
    },
    {
      name: 'Contact'
    }

  ]);
  const [currentNavLink, setCurrentNavLink] = useState(navLinks[0]);
  const renderLink = navLinks.filter((link) => link.name === link);
  const [showResume, setShowResume ] = useState(false);
  const [contactSelected, setContactSelected] = useState (false);
 
  return (
    <div>
      <Nav 
      navLinks={navLinks}
      setCurrentNavLink={setCurrentNavLink}
      currentNavLink={currentNavLink}
      renderLink={renderLink}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      showResume={showResume}
      setShowResume={setShowResume}>

      </Nav>
     <Nav></Nav>
      <main>
        {!showResume && !contactSelected ? (
          <>
          <Hero></Hero>
          <About></About>
          <Contact></Contact>
          <Portfolio></Portfolio>
          </>
          ) : (
            <Resume showResume={showResume} setShowResume={setShowResume}></Resume> 
            )}
            
        </main>
         <footer>
          <SocialLinks></SocialLinks>

         </footer>  
      </div>
    ); 
  }
export default App;