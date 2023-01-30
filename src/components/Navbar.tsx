import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import MagnetButton from './MagnetButton';

export default function Navbar() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const showAnim = gsap
        .from('.header', {
          yPercent: -100,
          paused: true,
          duration: 0.2
        })
        .progress(1);

      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <>
      <header className="header sticky w-full left-0 top-0 filter backdrop-blur-sm bg-black/[0.05] z-40 text-white">
        <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex font-bold items-center mb-4 md:mb-0 md:w-1/5">
            <span className="text-3xl uppercase">Caroro</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center uppercase md:w-3/5">
            <MagnetButton className="mr-5" data-cursor="small">
              <Link to={'/#bruh'}>Каталог</Link>
            </MagnetButton>
            <MagnetButton className="mr-5" data-cursor="small">
              <Link to="/#">Условия</Link>
            </MagnetButton>

            <MagnetButton data-cursor="small">
              <Link to="/#">Контакты</Link>
            </MagnetButton>
          </nav>
          <div className="inline-flex text-2xl font-medium mt-4 md:mt-0 justify-end items-center md:w-1/5">
            +7 777 777 77 77
          </div>
        </div>
      </header>
    </>
  );
}
