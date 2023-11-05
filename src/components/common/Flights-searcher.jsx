import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import mapIcon from "../../assets/mapPin.svg";

export function Searcher() {
  const [activeItem, setActiveItem] = useState(null);
  const {data, loading, error} = useFetch("/Clientes/GetAll");

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="w-[60%] m-0">
      {/* Tipo de servicio */}
      <div className="relative flex bg-[rgba(0,0,0,0.6)] items-center border-b border-white text-white box-border">
        <ul className="flex h-16">
          <li
            className={`p-4 text-center w-36 cursor-pointer ${
              activeItem === 0
                ? "border-b-2 bg-[rgba(0,0,0,0.4)]"
                : "hover:border-b-2 "
            }`}
            onClick={() => handleItemClick(0)}
          >
            Vuelos
          </li>
          <li
            className={`p-4 text-center w-36 cursor-pointer ${
              activeItem === 1
                ? "border-b-2 bg-[rgba(0,0,0,0.4)]"
                : "hover:border-b-2"
            }`}
            onClick={() => handleItemClick(1)}
          >
            Reservas
          </li>
        </ul>
      </div>
      {/* Buscador de vuelos */}
      <div className="bg-[rgba(0,0,0,0.7)] p-5 text-white ">
        {/* Radio buttons */}
        <div className="flex py-4 gap-8">
          <label htmlFor="ida" className="flex gap-3 items-center">
            <input type="radio" name="viaje" id="ida" className="h-4 w-4" />
            <p>Solo ida</p>
          </label>
          <label htmlFor="ida-vuelta" className="flex gap-3 items-center">
            <input
              type="radio"
              name="viaje"
              id="ida-vuelta"
              className="h-4 w-4"
            />
            <p>Ida y vuelta</p>
          </label>
        </div>
        {/* Inputs */}
        <div className="flex text-black mt-5">
          <div>
            <p className="text-white mb-2 text-sm">Origen</p>
            <div className="flex relative items-center">
              <img src={mapIcon} alt="" className="absolute h-4 w-4 left-2" />
              <input
                className="w-64 h-10 border text-sm pl-8"
                type="text"
                placeholder="Origen"
              />
            </div>
            <ul className="absolute bg-slate-100 py-2 w-64 border-b border-gray cursor-pointer hidden">
              {data?.map((item) => (
                <li key={item.numerodocumento} className="p-1 hover:bg-blue-300 hover:text-blue-600">
                  {item.nombres}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white mb-2 text-sm">Destino</p>
            <div className="flex relative items-center">
              <img src={mapIcon} alt="" className="absolute h-4 w-4 left-2" />
              <input
                className="w-64 h-10 border text-sm pl-8"
                type="text"
                placeholder="Destino"
              />
            </div>
            <ul className="absolute bg-slate-100 py-2 w-64 border-b border-gray cursor-pointer hidden">
              {data?.map((item) => (
                <li key={item.numerodocumento} className="p-1 hover:bg-blue-300 hover:text-blue-600">
                  {item.nombres}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Boton comprar */}
        <button className="my-9 bg-red-500 py-3 px-8 rounded-3xl">
          Comprar
        </button>
      </div>
    </div>
  );
}
