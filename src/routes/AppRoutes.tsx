import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import RentCar from '@/pages/RentCar';
import TempCar from '@/pages/TempCar';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<TempCar />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
