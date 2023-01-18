import image1 from '/images/card_image.svg';

const Card = () => {
  return (
    <div className="max-w-sm rounded-lg border-gray-200 border-2 overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-base  md:text-xl mb-2">Land Rover</div>
        <p className="text-gray-700 text-xs md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
          Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <img className="w-full" src={image1} />
      <div className="grid grid-cols-1 gap-6 justify-center justify-items-center px-12">
        <p className="">
          от <b>77.777 KZT</b> в мес.
        </p>
        <button className="w-full mb-6 bg-transparent hover:bg-red-400 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded transition duration-300 ease-in-out">
          Детали
        </button>
      </div>
    </div>
  );
};

export default Card;
