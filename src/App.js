import React from "react";

// import animate on scroll
import Aos from "aos";
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import Stunner from './components/Stunner';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Members from './components/Members';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';


const App = () => {
  // aos init
  // Aos.init({
  //   duration: 1800,
  //   offset: 0
  // })

  return (<div className="overflow-hidden">
    <Hero></Hero>
    <Stunner></Stunner>
    <Features></Features>
    <Testimonials></Testimonials>
    <About></About>
    <Members></Members>
    <CtaSection></CtaSection>
    <Footer></Footer>
  </div>);
};

export default App;
