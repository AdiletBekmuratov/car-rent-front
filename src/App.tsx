import AppRoutes from './routes/AppRoutes';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return <AppRoutes />;
}

export default App;
