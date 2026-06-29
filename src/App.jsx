import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';  // ✅ ADD THIS
import Layout from './components/Layout';
import Home from './pages/Home';
import Capital from './pages/Capital';
import Estates from './pages/Estates';
import Insure from './pages/Insure';

// You no longer need separate imports for About, Services, etc. if they're inside Home

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="capital" element={<Capital />} />
          <Route path="estates" element={<Estates />} />
          <Route path="insure" element={<Insure />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;