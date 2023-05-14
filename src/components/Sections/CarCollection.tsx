import Card from '@/components/Card';
import { useState } from 'react';

const data = [
  {
    id: 1,
    class: ['1'],
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    class: ['2'],
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    class: ['3'],
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 1,
    class: ['1'],
    image:
      'https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=731&q=80'
  },
  {
    id: 3,
    class: ['3'],
    image:
      'https://images.unsplash.com/photo-1593544340816-93d84a106415?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80'
  },
  {
    id: 3,
    class: ['3'],
    image:
      'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    class: ['3'],
    image:
      'https://images.unsplash.com/photo-1534093607318-f025413f49cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    class: ['3'],
    image:
      'https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
  },
  {
    id: 3,
    class: ['3', '2'],
    image:
      'https://images.unsplash.com/photo-1569240651611-302c9897bde5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653&q=80'
  },
  {
    id: 3,
    class: ['3', '2'],
    image:
      'https://images.unsplash.com/photo-1543796076-c8a565501995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  }
];

const CarCollection = () => {
  const [cars, setCars] = useState(data);

  const setFilter = (filterOption: string) => {
    setCars(data.filter((item) => item.class.includes(filterOption)));
  };

  return (
    <div className="layout my-16" id="catalog">
      <h3 className="sm:text-6xl text-2xl font-light text-center text-white uppercase mb-12">
        Каталог автомобилей
      </h3>
      <div className="flex justify-between border border-white/50 rounded-3xl" data-cursor="medium">
        <button
          onClick={() => setFilter('1')}
          className="flex items-center justify-center md:text-2xl flex-1 border-r border-white/50 py-6 hover:bg-white/80 hover:text-gray-900 hover:font-bold rounded-l-3xl transition-all">
          ЭКОНОМ
        </button>
        <button
          onClick={() => setFilter('2')}
          className="flex items-center justify-center md:text-2xl flex-1 border-r border-white/50 py-6 hover:bg-white/80 hover:text-gray-900 hover:font-bold transition-all">
          КОМФОРТ
        </button>
        <button
          onClick={() => setFilter('3')}
          className="flex items-center justify-center md:text-2xl flex-1 border-r border-white/50 py-6 hover:bg-white/80 hover:text-gray-900 hover:font-bold transition-all">
          БИЗНЕС
        </button>
        <button className="flex items-center justify-center md:text-2xl flex-1 border-r border-white/50 py-6 hover:bg-white/80 hover:text-gray-900 hover:font-bold transition-all">
          ПРЕМИУМ
        </button>
        <button className="flex items-center justify-center md:text-2xl flex-1 py-6  hover:bg-white/80 hover:text-gray-900 hover:font-bold rounded-r-3xl transition-all">
          ВНЕДОРОЖНИКИ
        </button>
      </div>

      <div className="grid grid-cols-2 gap-16 mt-12">
        {cars.map((item, index) => (
          <Card key={index} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default CarCollection;
