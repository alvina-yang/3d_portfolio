import { BrowserRouter } from "react-router-dom";

import { About, Education, Contact, Experience, Hero, Navbar, Tech, Works , StarsCanvas2, NightSkyCanvas, MoonCanvas, StarsCanvas } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary flex flex-col'>
      <Navbar />
        <div className='relative z-0'>
          <Hero />
          <StarsCanvas2 />
        </div>
        <About />
        <Education />
        <div className="relative z-0">
          <Tech />
          <StarsCanvas2 />
        </div>
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas2 />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;