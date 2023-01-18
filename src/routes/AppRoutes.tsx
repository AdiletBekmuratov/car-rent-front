import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Router>
      <div className="flex flex-col justify-start overflow-x-hidden min-h-screen">
        <Navbar />
        <div className="flex-grow flex flex-col">
          <ScrollToTop>
            <Routes></Routes>
          </ScrollToTop>
        </div>
      </div>
    </Router>
  );
};

export default AppRoutes;
