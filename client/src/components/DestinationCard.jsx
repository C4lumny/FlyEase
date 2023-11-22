import { useNavigate } from "react-router-dom";

export function DestinationCard({ ciudad }) {
  const navigateTo = useNavigate();

  const handleClick = () => {
    navigateTo(`/${ciudad.nombre}`);
  };

  return (
    <div className="h-80 w-[30%] rounded-3xl mx-1 relative overflow-hidden ">
      <img
        src={`data:image/webp;base64, ${ciudad.imagen}`}
        alt=""
        className="object-cover w-full h-full rounded-3xl brightness-75 hover:transform hover:scale-105 transition-all duration-500"
      />
      <div className="absolute bottom-0 left-0 p-4 text-white z-10">
        <h2 className="text-xl font-bold cursor-pointer hover:text-red-400 ease-in-out duration-300 hover:underline" onClick={handleClick}>
          {ciudad.nombre}, {ciudad.region.nombre}
        </h2>
        <p className="cursor-pointer">{ciudad.region.pais.nombre}</p>
      </div>
    </div>
  );
}
