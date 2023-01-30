// import detail_image from '/images/detail_image.png';
import Navbar from '@/components/Navbar';

const RentCar = () => {
  return (
    <main className="bg-gray-900  h-full w-ful">
      <Navbar />
      <div className="layout grid grid-cols-3 gap-4 py-12 text-white">
        <div className="col-span-1">
          <p className="rounded-full border border-white-100 px-3 py-0.5 text-lg font-bold tracking-wide text-white-600 w-60 uppercase text-left">
            2020 год выпуска
          </p>
          <p className="rounded-full border border-white-100 px-3 py-0.5 text-lg font-bold tracking-wide text-white-600 w-72 uppercase text-left mt-3">
            Полная комплектация
          </p>
          <p className="text-6xl uppercase mt-10">HYUNDAI ACCENT</p>
          <div className="grid grid-cols-2 mt-12 py-10">
            <div className="rounded-2xl bg-white text-black border border-white-100 px-3 py-2 text-lg font-bold tracking-wide text-white-600 w-60 h-32 uppercase justify-center">
              <p className="mt-0">5</p>
              <p className="mt-5 text-gray-600">посадочных мест</p>
            </div>
            <div className="rounded-2xl bg-white text-black border border-white-100 px-3 py-2 text-lg font-bold tracking-wide text-white-600 w-60 h-32 uppercase justify-center">
              <p className="mt-0">1,6л</p>
              <p className="mt-5 text-gray-600">объем двигателя</p>
            </div>
            <div className="rounded-2xl bg-white text-black border border-white-100 px-3 py-2 text-lg font-bold tracking-wide text-white-600 w-60 h-32 uppercase justify-center mt-5">
              <p className="mt-0">8л/100км</p>
              <p className="mt-5 text-gray-600">расход топлива</p>
            </div>
            <div className="rounded-2xl bg-white text-black border border-white-100 px-3 py-2 text-lg font-bold tracking-wide text-white-600 w-60 h-32 uppercase justify-center mt-5">
              <p className="mt-0">465л</p>
              <p className="mt-5 text-gray-600">объем багажника</p>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <img className="rounded-xl" src="/example.jpg"></img>
        </div>
      </div>
      <div className="layout grid grid-cols-3 gap-4 py-12 text-white">
        <div className="col-span-2">
          <img className="rounded-xl" src="/example.jpg"></img>
        </div>

        <div className="col-span-1">
          <div className="grid grid-cols-2">
            <div className="text-left text-xl col-span-2">
              Hyundai Accent — комфортабельный и надёжный автомобиль. Большая решётка радиатора,
              оригинальная оптика, уникальный дизайн литых колёсных дисков создают стильный
              экстерьер. Система безопасности Hyundai включает светодиоды, ABS, обеспечивающую
              устойчивость, шесть подушек — фронтальные и боковые. Значимые плюсы Accent'a —
              климат-контроль, система hands free, мультимедиа, приборная панель с подсветкой,
              большой сенсорный экран, удалённый запуск двигателя, обогрев зеркал, вместительный
              багажник на 465 л. Автомобиль максимально адаптирован к Казахстанским условиям
              эксплуатации.
            </div>
            <div className="col-span-1">
              <div className="flex bg-white w-72 h-72 rounded-full mt-24">
                <div className="text-black/95 text-xl font-bold  ">Забронировать машину</div>
              </div>
            </div>
            <div>
              <div className="flex border w-72 h-72 rounded-full mt-24">
                <div className="text-white/95 text-xl font-bold text-center ">
                  Вернуться в каталог
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RentCar;
