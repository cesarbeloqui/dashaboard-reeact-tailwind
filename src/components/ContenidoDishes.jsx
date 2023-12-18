import img from '../assets/pizza_banner.png';
import CardContenido from './CardContenido';

const ContenidoDishes = () => {
  const dishes = [
    {
      imagen: img,
      name: 'Speacy Satsone safefood nodles',
      precio: 2.29,
      cantidad: 20,
    },
    {
      imagen: img,
      name: 'Speacy Satsone safefood nodles',
      precio: 2.29,
      cantidad: 20,
    },
    {
      imagen: img,
      name: 'Speacy Satsone safefood nodles',
      precio: 2.29,
      cantidad: 20,
    },
    {
      imagen: img,
      name: 'Speacy Satsone safefood nodles',
      precio: 2.29,
      cantidad: 20,
    },
    {
      imagen: img,
      name: 'Speacy Satsone safefood nodles',
      precio: 2.29,
      cantidad: 20,
    },
    {
      imagen: img,
      name: 'Speacy Satsone safefood nodles',
      precio: 2.29,
      cantidad: 20,
    },
  ];
  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-20 lg:grid-cols-3">
      {/* Card */}
      {dishes.map((dish, index) => {
        return <CardContenido key={index} {...dish} />;
      })}
    </div>
  );
};

export default ContenidoDishes;
