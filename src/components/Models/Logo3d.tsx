import { useGLTF } from '@react-three/drei';
import { PrimitiveProps, useThree } from '@react-three/fiber';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Vector3 } from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function Logo3d(props: Partial<PrimitiveProps>) {
  const group = useRef();
  const { scene, nodes, animations } = useGLTF('/scene.gltf');

  let camera = useThree((state) => state.camera);
  // let scene = useThree((state) => state.scene);

  useLayoutEffect(() => {
    camera.position.set(0, 0, 10);

    let fov = camera.fov;

    fov = (1400 * 18) / window.innerWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();

    let mm = gsap.matchMedia();

    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: 48em)`,
        isMobile: `(max-width: 48em)`
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop, isMobile } = context.conditions;

        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: '#start',
            start: 'top+=0 top',
            endTrigger: '#end',
            end: 'top top',
            scrub: true,
            markers: true,
            pin: true
          }
        });

        t1.fromTo(camera.position, { x: 0, y: 0 }, { x: 0, y: 0 })
          .to(scene.rotation, { y: 0.8 })
          .to(scene.rotation, { y: 1.6 })
          .to(scene.rotation, { z: 0 }, 'key1')
          .to(camera.position, { z: 15 })
          .to(scene.rotation, { z: 1 });
        // .to(scene.rotation, { y: 0, z: 0 }, 'key2')
        // .to(camera.position, { x: isDesktop ? -1 : 0 }, 'key2')
        // .to(scene.rotation, { z: 0, y: 2 }, 'key3')
        // .to(camera.position, { x: isDesktop ? 0.8 : 0, y: 0 }, 'key3');

        if (isMobile) {
          camera.fov = 20;
          camera.updateProjectionMatrix();
        }

        return () => {
          if (t1) t1.kill();
        };
      }
    );
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={new Vector3(1, 1, 1)}>
        <primitive {...props} object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload('/scene.gltf');
