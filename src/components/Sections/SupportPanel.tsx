import { BiBug, BiDollar, BiSupport } from 'react-icons/bi';
import { FaNewspaper } from 'react-icons/fa';

const SupportPanel = () => {
  return (
    <section className="layout my-24">
      <div className="block rounded-lg bg-gray-900">
        <div className="flex flex-wrap items-center">
          <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
            <div className="map-container-2 w-full h-[500px]">
              <iframe
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
            <div className="flex flex-wrap pt-12 lg:pt-0">
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <BiSupport className="w-full h-full text-white" />
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Техническая поддержка</p>
                    <p className="text-gray-300">support@caroro.kz</p>
                    <p className="text-gray-300">+7-(775)-321-41-91</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <BiDollar className="w-full h-full text-white" />
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Вопросы по продажам</p>
                    <p className="text-gray-300">sales@caroro.kz</p>
                    <p className="text-gray-300">+7-(775)-321-41-91</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <FaNewspaper className="w-full h-full text-white" />
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Рассылка</p>
                    <p className="text-gray-300">press@caroro.kz</p>
                    <p className="text-gray-300">+7-(775)-321-41-91</p>
                  </div>
                </div>
              </div>
              <div className="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                <div className="flex align-start">
                  <div className="shrink-0">
                    <div className="p-4 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                      <BiBug className="w-full h-full text-white" />
                    </div>
                  </div>
                  <div className="grow ml-6">
                    <p className="font-bold mb-1">Отчеты об ошибке</p>
                    <p className="text-gray-300">bugs@caroro.kz</p>
                    <p className="text-gray-300">+7-(775)-321-41-91</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportPanel;
