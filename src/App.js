import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Main from '../src/pages/Main';
import About from '../src/pages/About';
import Founder from '../src/pages/Founder';
import Classes from '../src/pages/Classes';
import FAQ from '../src/pages/FAQ';
import Contact from '../src/pages/Contact';
import Layout from './components/Layout';


const AppRoutes = () => {
  const location = useLocation();
  return (
    <Layout location={location}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;