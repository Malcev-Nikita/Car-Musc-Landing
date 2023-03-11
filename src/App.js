import './style/App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import UpperButton from './components/UpperButton';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <Contact />
      <Achievements />
      <UpperButton />
    </div>
  );
}

export default App;
