import Footer from '@/components/Footer';
import HScrollWrapper from '@/components/Sections/HScrollWrapper';
import LayeredSection from '@/components/LayeredSection';
import Navbar from '@/components/Navbar';
import SupportPanel from '@/components/Sections/SupportPanel';
import CarCollection from '@/components/Sections/CarCollection';

const Home = () => {
  return (
    <main className="bg-gray-900 text-white">
      <Navbar />
      <LayeredSection />
      <HScrollWrapper />
      <CarCollection />
      <SupportPanel />
      <Footer />
    </main>
  );
};

export default Home;
