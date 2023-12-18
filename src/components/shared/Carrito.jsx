import { RiCloseLine, RiDeleteBin6Line } from 'react-icons/ri';
import img from '../../assets/pizza_banner.png';

/* Botones */

const Boton = ({ children, active }) => {
  return (
    <button
      className={`${
        active
          ? 'bg-[#ec7c6a] text-white'
          : 'text-[#ec7c6a] border border-gray-500'
      } py-2 px-4 rounded-xl`}
    >
      {children}
    </button>
  );
};
const CarritoCard = ({ imagen, name, precio, cantidad, total }) => {
  return (
    <div className="bg-[#252837] p-4 rounded-xl mb-4">
      <div className="grid grid-cols-6 mb-4">
        {/* desciption producto */}
        <div className="col-span-4 flex items-center gap-3 ">
          <img src={imagen} className="w-10 h-10 object-cover" />
          <div>
            <h5 className="text-sm">{name}</h5>
            <p className="text-xs text-gray-500">{precio}</p>
          </div>
        </div>
        {/* cantidad */}
        <div>
          <span>{cantidad}</span>
        </div>

        {/* Precio */}
        <div>
          <span>{total}</span>
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
        <div className="col-span-1">
          <button className="border border-red-500 p-2 rounded-lg">
            <RiDeleteBin6Line className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Carrito = ({ showOrder, setShowOrder }) => {
  const botones = [
    { text: 'Dine in', active: true },
    { text: 'To do', active: false },
    { text: 'Delivery', active: false },
  ];
  const products = [
    {
      imagen: img,
      name: 'Spaicy seado...',
      precio: '$2.29',
      cantidad: '2',
      total: '$4.58',
    },
    {
      imagen: img,
      name: 'Spaicy seado...',
      precio: '$2.29',
      cantidad: '2',
      total: '$4.58',
    },
    {
      imagen: img,
      name: 'Spaicy seado...',
      precio: '$2.29',
      cantidad: '2',
      total: '$4.58',
    },
    {
      imagen: img,
      name: 'Spaicy seado...',
      precio: '$2.29',
      cantidad: '2',
      total: '$4.58',
    },
  ];
  const closeCarrito = () => {
    setShowOrder(false);
  };

  return (
    <div
      className={`fixed right-0 top-0 bg-[#1F1D28] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? 'right-0' : '-right-full'
      }`}
    >
      {/* orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        {/* boton cerrar  */}
        <button
          onClick={closeCarrito}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#252837] rounded-full text-xl "
        >
          <RiCloseLine />
        </button>
        {/* titulo de la orden */}
        <h1 className="text-2xl my-4">Orders #15436</h1>
        {/* botones  */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          {botones.map((boton) => {
            return (
              <Boton key={boton.text} active={boton.active}>
                {boton.text}
              </Boton>
            );
          })}
        </div>
        {/* tabla de ordenes */}
        <div>
          {/* tiulo de la tabla de ordenes */}
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>price</h5>
          </div>
          {/* Productos */}
          <div className="h-64 md:h-[800px] lg:h-96 overflow-scroll">
            {products.map((product, index) => {
              return <CarritoCard key={index} imagen={product.imagen} name={product.name} precio={product.precio} cantidad={product.cantidad} total={product.total} />;
            })}
          </div>
        </div>
        {/* Submit payment */}
        <div className="bg-[#252837] absolute bottom-0 left-0 p-4 w-full">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Descuento</span>
            <span>$0.00</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>$201.03</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
              Continua con el pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
