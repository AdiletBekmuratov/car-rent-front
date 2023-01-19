import image1 from '/images/card_image.svg';

const Card = () => {
  return (
    <a href="#" className="h-80 relative overflow-hidden group rounded-2xl w-full">
      <div className="group-hover:scale-110  transition-all absolute w-full h-full  block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&h=800&q=80)] bg-cover bg-center bg-no-repeat"></div>
      <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
        4.5
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1.5 h-4 w-4 text-yellow-300"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </span>
      <div className='absolute inset-0 bg-black/20'></div>
      <div className="absolute left-4 bottom-4 text-white">
        <h3 className="text-2xl font-bold">Mercedes-Benz E200</h3>

        <p className="text-sm">70.000KZT</p>
      </div>
    </a>
  );
};

export default Card;
