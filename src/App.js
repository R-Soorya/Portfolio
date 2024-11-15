
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About  from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Interests from './components/Interest';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Interests/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
