import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/pages/Main';
import About from '../src/pages/About';
import Founder from '../src/pages/Founder';
import Classes from '../src/pages/Classes';
import FAQ from '../src/pages/FAQ';
import Contact from '../src/pages/Contact';
import Layout from './components/Layout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="founder" element={<Founder />} />
            <Route path="classes" element={<Classes />} />
            <Route path="faq" element={<FAQ/>} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;