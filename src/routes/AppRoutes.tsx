import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default AppRoutes;
