import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';

const HScrollWrapper = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let sections: HTMLDivElement[] = gsap.utils.toArray('.panel');

      let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.container-scroll',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => '+=' + document.querySelector<HTMLDivElement>('.container-scroll')!.offsetWidth
        }
      });

      sections.forEach((section) => {
        // grab the scoped text
        let text = section.querySelectorAll('.text-anim');

        // bump out if there's no items to animate
        if (text.length === 0) return;

        // do a little stagger
        gsap.from(text, {
          y: 50,
          opacity: 0,
          duration: 1.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: 'left center'
          }
        });
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <div className="container-scroll bg-gray-900">
        <div className="panel flex flex-1 w-full h-full items-center justify-center text-gray-900">
          <div className="w-[45%] flex items-center justify-center relative">
            <h3 className="sm:text-3xl text-2xl font-medium text-center absolute -top-24 z-10 text-white capitalize">
              Самые популярные модели
            </h3>
            <div className="w-full overflow-hidden group rounded-md">
              <img
                src="https://i.auto-bild.de/mdb/extra_large/41/c8-ef3.png"
                alt=""
                className="h-[50vh] w-full object-cover opacity-70 rounded-md group-hover:scale-105 transition-all duration-1000"
                data-cursor="medium"
              />
            </div>

            <div className="absolute text-white z-10 -left-48 pointer-events-none">
              <h1 className="text-6xl mb-4 font-arbil capitalize">AUDI A6</h1>
              <p className="text-xl font-extralight leading-relaxed max-w-[60ch]">
                Audi A6 — это роскошный седан среднего размера с впечатляющей производительностью,
                передовыми технологиями и стильным внешним видом.
                {/* Он оснащен мощным двигателем и
                маневренной управляемостью, что делает его отличным выбором как для ежедневных
                поездок на работу, так и для приключений на выходных */}
              </p>
            </div>
          </div>
        </div>
        <div className="panel flex flex-1 w-full h-full items-center justify-center text-gray-900">
          <div className="w-[45%] flex items-center justify-center relative">
            <div className="w-full overflow-hidden group rounded-md">
              <img
                src="https://img-c.drive.ru/models.large.main.images/0000/000/000/001/b55/48d9739edd08f02b-main.jpg"
                alt=""
                className="h-[50vh] w-full object-cover opacity-70 rounded-md group-hover:scale-105 transition-all duration-1000"
                data-cursor="medium"
              />
            </div>

            <div className="absolute text-white z-10 -left-48 pointer-events-none">
              <h1 className="text-6xl capitalize mb-4 font-arbil text-anim">BMW M3</h1>
              <p className="text-xl font-extralight leading-relaxed max-w-[60ch] text-anim">
                BMW M3 — это высокопроизводительный автомобиль, оснащенный двигателем с
                турбонаддувом, улучшенной подвеской и тормозами
              </p>
            </div>
          </div>
        </div>
        <div className="panel flex flex-1 w-full h-full items-center justify-center text-gray-900">
          <div className="w-[45%] flex items-center justify-center relative">
            <div className="w-full overflow-hidden group rounded-md">
              <img
                src="https://media.ed.edmunds-media.com/mercedes-benz/s-class/2021/oem/2021_mercedes-benz_s-class_sedan_s-500-4matic_fq_oem_1_1600.jpg"
                alt=""
                className="h-[50vh] w-full object-cover opacity-70 rounded-md group-hover:scale-105 transition-all duration-1000"
                data-cursor="medium"
              />
            </div>

            <div className="absolute text-white z-10 -left-48 pointer-events-none">
              <h1 className="text-6xl capitalize mb-4 font-arbil text-anim">
                Mercedes Benz <br /> S Class
              </h1>
              <p className="text-xl font-extralight leading-relaxed max-w-[60ch] text-anim">
                Mercedes-Benz S-Класса — роскошный седан, сочетающий в себе современные технологии,
                изысканность и элегантность
              </p>
            </div>
          </div>
        </div>
        <div className="panel flex flex-1 w-full h-full items-center justify-center text-gray-900">
          <div className="w-[45%] flex items-center justify-center relative">
            <div className="w-full overflow-hidden group rounded-md">
              <img
                src="https://www.allcarz.ru/wp-content/uploads/2019/03/foto-elantra-ad_01.jpg"
                alt=""
                className="h-[50vh] w-full object-cover opacity-70 rounded-md group-hover:scale-105 transition-all duration-1000"
                data-cursor="medium"
              />
            </div>

            <div className="absolute text-white z-10 -left-48 pointer-events-none">
              <h1 className="text-6xl capitalize mb-4 font-arbil text-anim">
                Hyundai Elantra <br /> 2020
              </h1>
              <p className="text-xl font-extralight leading-relaxed max-w-[60ch] text-anim">
                Hyundai Elantra 2020 — стильный и доступный компактный седан с множеством функций и
                передовыми технологиями
              </p>
            </div>
          </div>
        </div>
        <div className="panel flex flex-1 w-full h-full items-center justify-center text-gray-900">
          <div className="w-[45%] flex items-center justify-center relative">
            <div className="w-full overflow-hidden group rounded-md">
              <img
                src="https://avatars.mds.yandex.net/get-verba/937147/2a0000017c7dc81f2ae7cad76e7d5c433130/cattouchret"
                alt=""
                className="h-[50vh] w-full object-cover opacity-70 rounded-md group-hover:scale-105 transition-all duration-1000"
                data-cursor="medium"
              />
            </div>

            <div className="absolute text-white z-10 -left-48 pointer-events-none">
              <h1 className="text-6xl capitalize mb-4 font-arbil text-anim">Kia Forte</h1>
              <p className="text-xl font-extralight leading-relaxed max-w-[60ch] text-anim">
                Kia Forte — это компактный автомобиль, который предлагает отличное сочетание цены,
                эффективности, комфорта и стиля
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HScrollWrapper;
