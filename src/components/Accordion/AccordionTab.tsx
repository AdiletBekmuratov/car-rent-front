import React, { FC, ReactNode } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface IAccordionTabProps {
  title: string;
  children: ReactNode;
  tabIndex: number;
}

export const AccordionTab: FC<IAccordionTabProps> = ({ children, tabIndex, title }) => {
  return (
    <div className="group outline-none accordion-section" tabIndex={tabIndex}>
      <div className="group bg-gray-900 flex justify-between px-6 py-8 items-center text-white transition ease duration-500 cursor-pointer">
        <div className="transition ease duration-500 text-4xl">{title}</div>
        <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180">
          <FaChevronDown />
        </div>
      </div>
      <div className="group-focus:max-h-screen max-h-0 bg-gray-800 overflow-hidden ease duration-500 text-2xl">
        <p className="px-6 py-8 text-white text-justify">{children}</p>
      </div>
    </div>
  );
};
