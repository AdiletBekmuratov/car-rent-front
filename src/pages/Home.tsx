import { AccordionTab, AccordionWrapper } from '@/components/Accordion';
import Card from '@/components/Card';
import { Footer } from '@/components/Footer';
import HScrollWrapper from '@/components/HScroll/HScrollWrapper';
import Logo3dWrapper from '@/components/Models/Logo3dWrapper';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <main className="bg-gray-900 text-white">
      <Navbar />
      <div className="h-screen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis incidunt,
        perspiciatis assumenda praesentium consequuntur nihil at, magni culpa vero dolorem ipsum
        exercitationem ratione, amet nostrum neque eum quia obcaecati?
      </div>
      <HScrollWrapper />
      {/* <div className="w-full h-screen bg-transparent" id="start">
        <Logo3dWrapper />
      </div> */}
      <div className="grid grid-cols-2 gap-4 layout" id="end">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="layout">
        <AccordionWrapper>
          <AccordionTab title="Hello" tabIndex={1}>
            Hello
          </AccordionTab>
          <AccordionTab title="Hello 2" tabIndex={2}>
            Hello2
          </AccordionTab>
          <AccordionTab title="Hello 3" tabIndex={3}>
            Hello3
          </AccordionTab>
        </AccordionWrapper>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
