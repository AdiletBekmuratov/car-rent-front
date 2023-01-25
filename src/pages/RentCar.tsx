// import detail_image from '/images/detail_image.png';
import { motion } from 'framer-motion';

const RentCar = () => {
  return (
    <div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <motion.img
              layoutId="1"
              className="w-full"
              src={
                'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80'
              }
            />

            {/* <div className="grid grid-cols-2 gap-4 lg:mt-4">
              <img className="w-full" src={detail_image} />

              <img className="w-full" src={detail_image} />

              <img className="w-full" src={detail_image} />

              <img className="w-full" src={detail_image} />
            </div> */}
          </div>

          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              Pre Order
            </strong>

            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch]">
                <h1 className="text-2xl font-bold">Mercedes-Benz E63s 2022</h1>

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

              <p className="text-lg font-bold">77.777 KZT/мес.</p>
            </div>

            <details className="group relative mt-4">
              <summary className="block">
                <div>
                  <div className="prose max-w-none group-open:hidden">
                    <p>
                      Заряженный премиальный седан Mercedes-AMG E63 с внутризаводским индексом W213
                      впервые был представлен в конце октября 2016 года, а в следующем месяце
                      прогремела его официальная премьера на автосалоне в Лос-Анджелесе.
                    </p>
                  </div>

                  <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                    Подробнее
                  </span>
                </div>
              </summary>

              <div className="prose max-w-none pb-6">
                <p>
                  Заряженный премиальный седан Mercedes-AMG E63 с внутризаводским индексом W213
                  впервые был представлен в конце октября 2016 года, а в следующем месяце прогремела
                  его официальная премьера на автосалоне в Лос-Анджелесе.
                </p>

                <p>
                  Новый Мерседес-Бенц Е63 АМГ 2022 стал настоящей «бомбой» на колесах, скрыв под
                  своим законопослушным четырехдверным кузовом чудовищную сущность и превратившись в
                  настоящий суперкар.
                </p>
              </div>
            </details>

            <div className="mt-8">
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Color</legend>

                <div className="flow-root">
                  <div className="-m-0.5 flex flex-wrap">
                    <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                      <input type="radio" name="color" id="color_tt" className="peer sr-only" />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Texas Tea
                      </span>
                    </label>

                    <label htmlFor="color_fr" className="cursor-pointer p-0.5">
                      <input type="radio" name="color" id="color_fr" className="peer sr-only" />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Fiesta Red
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer p-0.5">
                      <input type="radio" name="color" id="color_cb" className="peer sr-only" />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Cobalt Blue
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <fieldset className="mt-4">
                <legend className="mb-1 text-sm font-medium">Size</legend>

                <div className="flow-root">
                  <div className="-m-0.5 flex flex-wrap">
                    <label htmlFor="size_xs" className="cursor-pointer p-0.5">
                      <input type="radio" name="size" id="size_xs" className="peer sr-only" />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        XS
                      </span>
                    </label>

                    <label htmlFor="size_s" className="cursor-pointer p-0.5">
                      <input type="radio" name="size" id="size_s" className="peer sr-only" />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        S
                      </span>
                    </label>

                    <label htmlFor="size_m" className="cursor-pointer p-0.5">
                      <input type="radio" name="size" id="size_m" className="peer sr-only" />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        M
                      </span>
                    </label>

                    <label htmlFor="size_l" className="cursor-pointer p-0.5">
                      <input type="radio" name="size" id="size_l" className="peer sr-only" />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        L
                      </span>
                    </label>

                    <label htmlFor="size_xl" className="cursor-pointer p-0.5">
                      <input type="radio" name="size" id="size_xl" className="peer sr-only" />

                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        XL
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <div className="mt-4 flex">
                <button
                  type="submit"
                  className="ml-3 block rounded bg-green-600 px-10 py-3 text-xs font-medium text-white hover:bg-green-500">
                  Забронировать
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mt-8">Характеристики</h2>
        <div className="mt-8 grid grid-cols-2 gap-4">
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
      </div>
    </div>
  );
};

export default RentCar;
