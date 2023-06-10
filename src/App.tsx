import './App.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
   return (
      <div>
         <header>
            <NavBar />
         </header>
         <main className="w-full max-w-5xl mx-auto">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
         </main>
      </div>
   );
}

export default App;
