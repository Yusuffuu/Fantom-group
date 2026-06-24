import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import Capital from './pages/Capital';
import Estates from './pages/Estates';
import Insure from './pages/Insure';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="capital" element={<Capital />} />
          <Route path="estates" element={<Estates />} />
          <Route path="insure" element={<Insure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;