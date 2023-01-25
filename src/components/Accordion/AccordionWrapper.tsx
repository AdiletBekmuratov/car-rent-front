import React, { FC, HTMLAttributes, ReactNode } from 'react';

interface IAccordionWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AccordionWrapper: FC<IAccordionWrapperProps> = ({ children, ...rest }) => {
  return (
    <div {...rest} className={`rounded overflow-hidden ${rest.className}`}>
      {children}
    </div>
  );
};
