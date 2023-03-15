import './style/App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Slider from './components/Slider';
import SliderPlus1 from './components/SliderPlus1';
import Services from './components/Services';
import SliderPlus2 from './components/SliderPlus2';
import UpperButton from './components/UpperButton';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <Contact />
      <Achievements />
      <Slider />
      <SliderPlus1 />
      <Services />
      <SliderPlus2 />
      <UpperButton />
    </div>
  );
}

export default App;
