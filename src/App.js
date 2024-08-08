import './App.css';
import GsapTo from './pages/gasp-to';

import GsapFromTo from './pages/gsap-fromto';
import GsapTimeLine from './pages/gsapTimeLine';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <GsapTo/>
      <GsapFromTo/>
      <GsapTimeLine/>
      </header>
    </div>
  );
}

export default App;
