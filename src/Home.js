import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/footer/Footer';


function Home() {
    return (
      <>
        <Hero/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        
      </>
    );
  }
  
  export default Home;