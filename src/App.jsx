import { useState } from 'react';
import Siderbar from './components/shared/Siderbar';
import {
  RiAddLine,
  RiAliensLine,
  RiCloseLine,
  RiMenuLine,
  RiUser3Line,
  RiSearch2Line,
} from 'react-icons/ri';

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
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6 ">
          <header className="p-4">
            {/* Header */}
            <div className="flex flex-col gap-4 mb-6">
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

            <nav className="text-gray-300 flex items-center justify-between border-b">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-1/2 before:h-1 before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px] text-[#ec7c6a]"
              >
                Hot dishes
              </a>
              <a href="#" className="">
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
        </div>
        <div className="lg:col-span-2  fixed lg:static right-0">Carrito</div>
      </main>
    </div>
  );
}

export default App;
