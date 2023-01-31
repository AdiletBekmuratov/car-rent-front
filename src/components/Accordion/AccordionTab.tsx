import { FC, ReactNode } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { AccordionConsumer } from './Context';

interface IAccordionTabProps {
  title: string;
  children: ReactNode;
  tabIndex: number;
}

export const AccordionTab: FC<IAccordionTabProps> = ({ children, tabIndex, title }) => {
  return (
    <AccordionConsumer>
      {({ setActive, active }) => (
        <div
          className="group outline-none accordion-section"
          tabIndex={tabIndex}
          onClick={() => setActive(tabIndex.toString() === active ? '' : tabIndex.toString())}>
          <div className="group bg-gray-900 flex justify-between px-6 py-8 items-center text-white transition ease duration-500 cursor-pointer">
            <div className="transition ease duration-500 text-4xl">{title}</div>
            <div
              className={`h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 `}>
              {active === tabIndex.toString() ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          <div
            className={`${
              active === tabIndex.toString() ? 'max-h-screen' : 'max-h-0'
            } bg-gray-800 overflow-hidden ease duration-500 text-2xl`}>
            <p className="px-6 py-8 text-white text-justify">{children}</p>
          </div>
        </div>
      )}
    </AccordionConsumer>
  );
};
