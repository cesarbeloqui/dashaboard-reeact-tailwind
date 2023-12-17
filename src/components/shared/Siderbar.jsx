import {
  RiHome3Line,
  RiPercentLine,
  RiPieChart2Line,
  RiMailLine,
  RiNotificationLine,
  RiSettings3Line,
  RiLogoutBoxLine,
} from 'react-icons/ri';

const Siderbar = ({ showMenu }) => {
  return (
    <div
      className={`bg-[#1F1D28] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? 'left-0' : '-left-full'
      }`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>
          <li className="bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-white"
            >
              <RiHome3Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPercentLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChart2Line className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotificationLine className="text-2xl" />
            </a>
          </li>
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings3Line className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#252837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutBoxLine className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Siderbar;
