import { Link } from 'react-router-dom';
import MagnetButton from './MagnetButton';

export default function Navbar() {
  return (
    <>
      <header className="header fixed w-full left-0 top-0 filter backdrop-blur-sm bg-black/[0.05] z-40 text-white">
        <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={'/'}
            className="flex font-bold items-center mb-2 md:mb-0 md:w-1/5"
            data-cursor="small">
            <span className="text-xl md:text-3xl uppercase">Caroro</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base md:text-xl justify-center uppercase md:w-3/5">
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
          <a
            href="tel:+77777777777"
            data-cursor="small"
            className="inline-flex text-lg md:text-2xl font-medium mt-2 md:mt-0 justify-end items-center md:w-1/5">
            +7 777 777 77 77
          </a>
        </div>
      </header>
    </>
  );
}
