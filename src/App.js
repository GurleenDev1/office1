import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import FeatureSection from './components/FeatureSection';
import AboutUs from './components/AboutUs';
import FocusSection from './components/FocusSection';
import Footer from './components/Footer';
import Client from './components/client';
import FeaturedArticles from './components/sapjourney';

function App() {
  return (
    <div className="App">
      <>
      
      <Navbar />
      <Herosection/>
      <FeatureSection />
      <AboutUs /> {/* Added AboutUs component */}
      <FocusSection/>
      <FeaturedArticles />

      <Client/>
      <Footer/>
      </>
      
    </div>
  );
}

export default App;
