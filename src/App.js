import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Skills1 from './components/skills1/Skills1';
import Work from './components/work/Work'

function App() {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills1 />
      <Work />
    </main>
    </>
  );
}

export default App;
