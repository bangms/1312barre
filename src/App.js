import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/pages/Main';
import About from '../src/pages/About';
import Founder from '../src/pages/Founder';
import Instructor from '../src/pages/Instructor';
import Classes from '../src/pages/Classes';
import FAQ from '../src/pages/FAQ';
import Contact from '../src/pages/Contact';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="founder" element={<Founder />} />
          <Route path="instructor" element={<Instructor />} />
          <Route path="classes" element={<Classes />} />
          <Route path="faq" element={<FAQ/>} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;