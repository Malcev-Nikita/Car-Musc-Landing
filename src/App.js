import './style/App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Contact from './components/Contact';

function App() {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <Contact />
    </div>
  );
}

export default App;
