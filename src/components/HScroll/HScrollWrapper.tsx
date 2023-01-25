import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HScrollWrapper = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container-scroll",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".container-scroll").offsetWidth
        }
      });
    })
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    
    <div className="container-scroll">
      <div className="panel bg-blue-500 flex flex-1 w-full h-full items-center justify-center">ONEONE</div>
      <div className="panel bg-green-500 flex flex-1 w-full h-full items-center justify-center">TWOWEO</div>
      <div className="panel bg-red-500 flex flex-1  w-full h-full items-center justify-center">UWWWWWWWWW</div>
    </div>
  );
};

export default HScrollWrapper;
