import { gsap } from 'gsap';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HScrollWrapper = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.massiveImage', {
        backgroundImage: `url(https://source.unsplash.com/random/${innerWidth * 3}x${innerHeight})`
      });

      gsap.to('.massiveImage', {
        xPercent: -100,
        x: () => innerWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: '.massiveImage',
          start: 'top top',
          end: () => innerWidth * 3,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return <div className="massiveImage"></div>;
};

export default HScrollWrapper;
