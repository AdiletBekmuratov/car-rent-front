import { FaStar } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="h-80 relative overflow-hidden group rounded-2xl w-full">
      <div
        className="group-hover:scale-110 transition-all duration-500 absolute w-full h-full  block overflow-hidden rounded-xl 
      bg-[url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80)] 
      bg-cover bg-center bg-no-repeat"></div>
      <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
        4.5
        <FaStar className="ml-1.5 h-3 w-3 text-yellow-300" />
      </span>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute left-4 bottom-4 text-white">
        <h3 className="text-2xl font-bold">Mercedes-Benz E200</h3>

        <p className="text-sm">70.000KZT</p>
      </div>
    </div>
  );
};

export default Card;
