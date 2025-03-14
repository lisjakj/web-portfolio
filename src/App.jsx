import './App.css'
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Meta from '.sections/Meta/Meta';

function App() {
  console.log('test')
  return <>
    <Meta/>
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </>
  
}

export default App
