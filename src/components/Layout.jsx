import { Outlet } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import NavBar from './NavBar';
import CTA from './CTA';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black antialiased">
      <TopNavBar />
      <NavBar />
      <main className="grow w-full">
        <Outlet />
      </main>
      <CTA />
      <Footer />
    </div>
  );
};

export default Layout;