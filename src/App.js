import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div >
      <Header/>
      <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      
      </main>
      <Footer/>
      <Scrollup/>
    </div>
  );
}

export default App;
