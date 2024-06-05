import React from 'react';
import Navbar from './pages/NavBar/NavBar';
import MainSection from './pages/MainSection/MainSection';
import Features from './pages/Features/Features';
import BestOfTheBest from './pages/BestOfTheBest/BestOfTheBest';
import WhyJoinUs from './pages/WhyJoinUs/WhyJoinUs';
import Testimonials from './pages/Testimonials/Testimonials';
import Collection from './pages/Collection/Collection';
import Footer from './pages/Footer/Footer';
import { ReactComponent as BackgroundSVG } from './assets/nav-bg.svg';
import { ReactComponent as WavesBg } from './assets/Waves.svg';
import { featuresData, testimonialsData, bestOfTheBestData } from './data';
import CollectionInfo from './pages/CollectionInfo/CollectionInfo';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="first-section-container">
        <BackgroundSVG className='main-section-bg' />
        <MainSection />
        <Features data={featuresData} />
      </div>
      <BestOfTheBest data={bestOfTheBestData} />
      <WhyJoinUs />
      <Testimonials data={testimonialsData} />
      <div className="second-section-container">
        <WavesBg style={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          width: '100%',
          height:'auto',
          zIndex: 0,
        }} />
        <Collection />
      </div>
      <CollectionInfo/>
      <Footer />
    </div>
  );
}

export default App;
