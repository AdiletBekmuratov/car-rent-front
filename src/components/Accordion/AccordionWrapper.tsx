import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import { AccordionProvider } from './Context';

interface IAccordionWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AccordionWrapper: FC<IAccordionWrapperProps> = ({ children, ...rest }) => {
  const [active, setActive] = useState('');
  return (
    <AccordionProvider value={{ active, setActive }}>
      <div {...rest} className={`rounded overflow-hidden ${rest.className}`}>
        {children}
      </div>
    </AccordionProvider>
  );
};
