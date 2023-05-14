import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { AiFillApple } from 'react-icons/ai';
import { IoLogoGooglePlaystore } from 'react-icons/io5';

const LayeredSection = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.l-panel').forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel as gsap.DOMTarget,
          start: 'top top',
          pin: true,
          pinSpacing: false
        });
      });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={comp} className="overflow-hidden">
      <section className="hero layout flex items-center justify-center l-panel">
        <div className="p-6 md:left-48 md:top-44 md:absolute bg-white rounded-md text-gray-900 w-fit max-w-[40ch] z-10">
          <div className="text-left">
            <h1 className="mb-4 leading-normal text-2xl md:text-4xl font-bold">
              Испытай свободу открытой дороги
            </h1>
            <h4 className="mb-4 text-sm md:text-lg font-light">
              Широкий ассортимент автомобилей эконом, комфорт и премиум класса
            </h4>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 w-full">
              <a
                data-cursor="small"
                href="#"
                className="w-full bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
                <AiFillApple className="mr-3 w-7 h-7" />

                <div className="text-left">
                  <div className="mb-1 text-xs">Скачать в</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                data-cursor="small"
                href="#"
                className="w-full bg-black focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
                <IoLogoGooglePlaystore className="mr-3 w-7 h-7" />
                <div className="text-left">
                  <div className="mb-1 text-xs">Скачать в</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="text-white bg-gray-900 flex items-center justify-center relative" id="rules">
        <div className="layout py-24">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-4xl tracking-widest font-bold mb-1 uppercase">Caroro</h2>
            <h1 className="sm:text-3xl text-2xl font-medium mb-4 capitalize">
              Арендуйте машину с легкостью
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Caroro — сервис по аренде автомобилей. Мощный, но простой в использовании, он поможет
              вам арендовать автомобиль, сделать лучший выбор и получить его быстрее. Вам не нужно
              искать самостоятельно — мы уже нашли для вас лучший вариант.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-2xl font-medium title-font mb-2">База</h2>
              <p className="leading-relaxed text-base mb-4">
                Обширная база автомобилей, доступных для аренды или лизинга.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-2xl font-medium title-font mb-2">Удобство</h2>
              <p className="leading-relaxed text-base mb-4">
                Интуитивно понятный интерфейс поиска, чтобы найти идеальный автомобиль для своих
                нужд.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-2xl font-medium title-font mb-2">Платежи</h2>
              <p className="leading-relaxed text-base mb-4">
                Простая в использовании система бронирования, позволяющая клиентам бронировать
                автомобили и оплачивать услуги аренды.
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-2xl font-medium title-font mb-2">Рейтинг</h2>
              <p className="leading-relaxed text-base mb-4">
                Система рейтинга и обзора, позволяющая клиентам оценивать и оставлять отзывы о
                компаниях по аренде
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayeredSection;
