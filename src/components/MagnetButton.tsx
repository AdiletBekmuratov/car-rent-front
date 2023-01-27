import { MouseEvent } from 'react';
import { FC, HTMLAttributes, ReactNode, useRef } from 'react';

const MagnetButton: FC<{ children: ReactNode } & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  const compRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const position = compRef.current!.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;

    compRef.current!.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px)`;
  };

  const handleMouseOut = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    compRef.current!.style.transform = `translate(0px, 0px)`;
  };

  return (
    <div
      {...rest}
      className={`magnet transition-all duration-100 relative ${rest.className}`}
      // @ts-ignore
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      ref={compRef}>
      {children}
    </div>
  );
};

export default MagnetButton;
