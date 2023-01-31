// import detail_image from '/images/detail_image.png';
import { AccordionTab, AccordionWrapper } from '@/components/Accordion';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const RentCar = () => {
  return (
    <main className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="relative layout py-8 ">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <motion.img
              className="w-full rounded-md"
              src={
                'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80'
              }
            />

            <div className="grid grid-cols-4 gap-4 lg:mt-4">
              <img
                className="w-full rounded-md"
                src={
                  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80'
                }
              />
              <img
                className="w-full rounded-md"
                src={
                  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80'
                }
              />
              <img
                className="w-full rounded-md"
                src={
                  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80'
                }
              />
              <img
                className="w-full rounded-md"
                src={
                  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80'
                }
              />
            </div>
          </div>

          <div className="sticky top-20 text-white">
            {/* <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              Pre Order
            </strong> */}

            <div className="flex justify-between">
              <div className="">
                <h1 className="text-5xl font-bold">Mercedes-Benz E63s 2022</h1>

                <p className="mt-0.5 text-sm">Highest Rated Product</p>

                <div className="mt-2 -ml-0.5 flex">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="h-5 w-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <p className="text-3xl font-bold">77.777 KZT/мес.</p>
            </div>

            <div className="mt-4 text-xl">
              <p>
                Заряженный премиальный седан Mercedes-AMG E63 с внутризаводским индексом W213
                впервые был представлен в конце октября 2016 года, а в следующем месяце прогремела
                его официальная премьера на автосалоне в Лос-Анджелесе.
              </p>

              <p>
                Новый Мерседес-Бенц Е63 АМГ 2022 стал настоящей «бомбой» на колесах, скрыв под своим
                законопослушным четырехдверным кузовом чудовищную сущность и превратившись в
                настоящий суперкар.
              </p>
            </div>

            <AccordionWrapper>
              <AccordionTab tabIndex={0} title="Характеристики">
                <div className="grid grid-cols-2 gap-4 text-white text-sm">
                  <div>Марка </div>
                  <div>Kia</div>
                  <div>Модель</div>
                  <div>Rio</div>
                  <div>Год выпуска</div>
                  <div>2021</div>
                  <div>Класс</div>
                  <div>Эконом</div>
                  <div>Цвет</div>
                  <div>Черный</div>
                  <div>Кузов</div>
                  <div>Седан</div>
                  <div>Привод</div>
                  <div>передний</div>
                  <div>Тип топлива</div>
                  <div>АИ-95</div>
                  <div>Коробка передач</div>
                  <div>автомат</div>
                  <div>Мощность, л.с.</div>
                  <div>123</div>
                  <div>Объем двигателя, см3</div>
                  <div>1591</div>
                  <div>Объем топливного бака</div>
                  <div>55</div>
                  <div>Разгон до 100 км./ч., сек.</div>
                  <div>12</div>
                  <div>Количество посадочных мест</div>
                  <div>5</div>
                </div>
              </AccordionTab>
            </AccordionWrapper>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RentCar;
