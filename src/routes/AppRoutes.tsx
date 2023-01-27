import Cursor from '@/components/Cursor/Cursor';
import Home from '@/pages/Home';
import TempCar from '@/pages/TempCar';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Cursor />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<TempCar />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
