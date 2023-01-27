import { AccordionTab, AccordionWrapper } from '@/components/Accordion';
import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';

const data = [
  {
    id: 1,
    class: '1',
    image: 'https://picsum.photos/500/1000?random=1'
  },
  {
    id: 2,
    class: '2',
    image: 'https://picsum.photos/500/1000?random=2'
  },
  {
    id: 3,
    class: '3',
    image: 'https://picsum.photos/500/1000?random=3'
  },
  {
    id: 1,
    class: '1',
    image: 'https://picsum.photos/500/1000?random=4'
  },
  {
    id: 3,
    class: '3',
    image: 'https://picsum.photos/500/1000?random=5'
  },
  {
    id: 3,
    class: '3',
    image: 'https://picsum.photos/500/1000?random=6'
  },
  {
    id: 3,
    class: '3',
    image: 'https://picsum.photos/500/1000?random=7'
  },
  {
    id: 3,
    class: '3',
    image: 'https://picsum.photos/500/1000?random=8'
  },
  {
    id: 3,
    class: '3',
    image: 'https://picsum.photos/500/1000?random=9'
  },
  {
    id: 3,
    class: '3',
    image: 'https://picsum.photos/500/1000?random=10'
  }
];

const Home = () => {
  const [filterOption, setFilterOption] = useState('1');
  const filteredData = useMemo(
    () => data.filter((item) => item.class === filterOption),
    [filterOption]
  );

  return (
    <main className="bg-gray-900 text-white">
      <Navbar />
      {/* <div className="h-screen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis incidunt,
        perspiciatis assumenda praesentium consequuntur nihil at, magni culpa vero dolorem ipsum
        exercitationem ratione, amet nostrum neque eum quia obcaecati?
      </div>
      <HScrollWrapper /> */}
      {/* <div className="w-full h-screen bg-transparent" id="start">
        <Logo3dWrapper />
      </div> */}
      <div className="layout my-16">
        <div
          className="flex justify-between border border-white/50 rounded-3xl"
          data-cursor="medium">
          <button
            onClick={() => setFilterOption('1')}
            className="flex items-center justify-center text-2xl flex-1 border-r border-white/50 py-6 hover:bg-white/80 hover:text-gray-900 hover:font-bold rounded-l-3xl transition-all">
            ЭКОНОМ
          </button>
          <button
            onClick={() => setFilterOption('2')}
            className="flex items-center justify-center text-2xl flex-1 border-r border-white/50 py-6 hover:bg-white/80 hover:text-gray-900 hover:font-bold transition-all">
            КОМФОРТ
          </button>
          <button
            onClick={() => setFilterOption('3')}
            className="flex items-center justify-center text-2xl flex-1 border-r border-white/50 py-6 hover:bg-white/80 hover:text-gray-900 hover:font-bold transition-all">
            БИЗНЕС
          </button>
          <button className="flex items-center justify-center text-2xl flex-1 border-r border-white/50 py-6 hover:bg-white/80 hover:text-gray-900 hover:font-bold transition-all">
            ПРЕМИУМ
          </button>
          <button className="flex items-center justify-center text-2xl flex-1 py-6  hover:bg-white/80 hover:text-gray-900 hover:font-bold rounded-r-3xl transition-all">
            ВНЕДОРОЖНИКИ
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-12">
          <AnimatePresence mode="wait">
            {filteredData.map((item, index) => (
              <Card key={index} image={item.image} />
            ))}
          </AnimatePresence>
        </div>
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
