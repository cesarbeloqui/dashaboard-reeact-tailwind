import { RiSearch2Line } from 'react-icons/ri'

const Header = () => {
  return (
    <div>{/* Header */}
    <header>
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
  </header></div>
  )
}

export default Header