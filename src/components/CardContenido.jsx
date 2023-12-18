const CardContenido = ({ imagen, name, precio, cantidad }) => {
  return (
    <div className="bg-[#1F1D28] rounded-lg flex flex-col items-center text-gray-300 text-center p-8 gap-2">
      <img
        src={imagen}
        alt="pizza"
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      />
      <p className="text-xl">{name}</p>
      <span className="text-gray-400">${`${precio}`}</span>
      <p className="text-gray-600">{`${cantidad}`} Bowls disponibles</p>
    </div>
  );
};

export default CardContenido;
