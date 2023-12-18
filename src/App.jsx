import { useState } from 'react';
import Siderbar from './components/shared/Siderbar';
import {
  RiAddLine,
  RiAliensLine,
  RiCloseLine,
  RiMenuLine,
  RiUser3Line,
  RiSearch2Line,
  RiArrowDownSLine,
  RiDeleteBin2Line,
  RiDeleteBin6Line,
} from 'react-icons/ri';
import img from './assets/pizza_banner.png';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#252837] w-full min-h-screen">
      <Siderbar showMenu={showMenu} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D28] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiAliensLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2 transition-all">
          {!showMenu ? <RiMenuLine /> : <RiCloseLine />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8">
          <header>
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-4 mb-6">
              {/* Titulo y search */}
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">17 diciembre 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#1F1D28] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                  />
                </div>
              </form>
            </div>
            {/* tabs */}

            <nav className="text-gray-300 flex items-center justify-between md:justify-start border-b mb-6 md:gap-8">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px] text-[#ec7c6a]"
              >
                Hot dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Cold dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soup
              </a>
              <a href="#" className="py-2 pr-4">
                Grill
              </a>
            </nav>
          </header>
          {/* Titulo del contenido */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D28] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Contenido */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-3">
            {/* Card */}
            <div className="bg-[#1F1D28] rounded-lg flex flex-col items-center text-gray-300 text-center p-8 gap-2">
              <img
                src={img}
                alt="pizza"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Satsone safefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls disponibles</p>
            </div>
            <div className="bg-[#1F1D28] rounded-lg flex flex-col items-center text-gray-300 text-center p-8 gap-2">
              <img
                src={img}
                alt="pizza"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Satsone safefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls disponibles</p>
            </div>
            <div className="bg-[#1F1D28] rounded-lg flex flex-col items-center text-gray-300 text-center p-8 gap-2">
              <img
                src={img}
                alt="pizza"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Satsone safefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls disponibles</p>
            </div>
            <div className="bg-[#1F1D28] rounded-lg flex flex-col items-center text-gray-300 text-center p-8 gap-2">
              <img
                src={img}
                alt="pizza"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Satsone safefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls disponibles</p>
            </div>
            <div className="bg-[#1F1D28] rounded-lg flex flex-col items-center text-gray-300 text-center p-8 gap-2">
              <img
                src={img}
                alt="pizza"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Satsone safefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls disponibles</p>
            </div>
            <div className="bg-[#1F1D28] rounded-lg flex flex-col items-center text-gray-300 text-center p-8 gap-2">
              <img
                src={img}
                alt="pizza"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy Satsone safefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls disponibles</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2  fixed lg:static right-0 top-0 bg-[#1F1D28] w-full h-full">
          {/* orders */}
          <div className="relative pt-16 text-gray-300 p-8">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#252837] rounded-full text-xl " />
            <h1 className="text-2xl my-4">Orders #15436</h1>
            {/* Pills */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
                Dine in
              </button>
              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                To do
              </button>
              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
                Delivery
              </button>
            </div>
            {/* carrito product */}
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5>Qty</h5>
                <h5>price</h5>
              </div>
              {/* Productors */}
              <div className="bg-[#252837] p-4 rounded-xl">
                <div className="grid grid-cols-6 mb-4">
                  {/* desciption producto */}
                  <div className="col-span-4 flex items-center gap-3 ">
                    <img src={img} className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seado...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* cantidad */}
                  <div>
                    <span>2</span>
                  </div>

                  {/* Precio */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center gap-4">
                  <form className="col-span-5 ">
                    <input
                      type="text"
                      className="bg-[#1F1D28]  py-2 px-4 rounded-lg outline-none"
                      placeholder="Order note..."
                    />
                  </form>
                  <div className='col-span-1'>
                    <button className='border border-red-500 p-2 rounded-lg'>
                      <RiDeleteBin6Line className='text-red-500' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
