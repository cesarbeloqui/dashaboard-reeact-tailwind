import { useState } from 'react';
import Siderbar from './components/shared/Siderbar';
import {
  RiAddLine,
  RiAliensLine,
  RiCloseLine,
  RiMenuLine,
  RiUser3Line,
} from 'react-icons/ri';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false)

const toggleMenu = () => {
  setShowMenu(!showMenu)
}
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
          <RiAliensLine  />
        </button>
        <button onClick={toggleMenu} className="text-white p-2 transition-all">
          {!showMenu ? <RiMenuLine />:
          <RiCloseLine/>}
        </button>
      </nav>
    </div>
  );
}

export default App;
