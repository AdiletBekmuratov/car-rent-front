import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

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

      ScrollTrigger.create({
        snap: 1 / 4 // snap whole page to the closest section!
      });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={comp} className="overflow-x-hidden">
      <section className="hero layout flex items-center justify-center l-panel">
        <div className="p-6 md:left-48 md:top-44 md:absolute bg-white rounded-md text-gray-900 w-fit max-w-[35ch] z-10">
          <div className="text-left">
            <h1 className="mb-4 leading-normal text-2xl md:text-4xl font-bold">
              Испытай свободу открытой дороги
            </h1>
            <h4 className="mb-4 text-sm md:text-lg font-thin">
              Широкий Широкий ассортимент автомобилей эконом, комфорт и премиум класса
            </h4>
            <div className="flex">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="google play"
                className="h-10 md:h-12 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="app store"
                className="ml-2 h-10 md:h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="l-panel bg-red-500 h-screen">ONE</section>
      <section className="l-panel bg-blue-500 h-screen">TWO</section>
      <section className="l-panel bg-pink-500 h-screen">THREE</section>
      <section className="l-panel bg-green-500 h-screen">FOUR</section>
    </div>
  );
};

export default LayeredSection;
