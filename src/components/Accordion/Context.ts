import { createContext } from 'react';

interface IAccordionContextProps {
  active: string;
  setActive: Function;
}

export const AccordionContext = createContext<IAccordionContextProps>({
  active: '',
  setActive: () => {}
});
export const { Provider: AccordionProvider, Consumer: AccordionConsumer } = AccordionContext;
