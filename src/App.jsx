import { useState } from 'react';
import Siderbar from './components/shared/Siderbar';
import {
  RiAddLine,
  RiCloseLine,
  RiMenuLine,
  RiUser3Line,
  RiSearch2Line,
  RiArrowDownSLine,
  RiShoppingCartLine,
} from 'react-icons/ri';
import Carrito from './components/shared/Carrito';
import Header from './components/Header';
import CardContenido from './components/CardContenido';
import ContenidoDishes from './components/ContenidoDishes';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  return (
    <div className="bg-[#252837] w-full min-h-screen">
      <Siderbar showMenu={showMenu} />
      <Carrito setShowOrder={setShowOrder} showOrder={showOrder} />
      {/* Menu movil */}
      <nav className="bg-[#1F1D28] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button onClick={toggleOrder} className="p-2">
          <RiShoppingCartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2 transition-all">
          {!showMenu ? <RiMenuLine /> : <RiCloseLine />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        {/* Headers titulo y contenido */}
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D28] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Contenido */}
          <ContenidoDishes/>
        </div>
      </main>
    </div>
  );
}

export default App;
