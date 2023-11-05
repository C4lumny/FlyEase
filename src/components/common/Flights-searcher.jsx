import { useState } from "react";

export function Searcher() {
  const [activeItem, setActiveItem] = useState(null);

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
            <select name="" id="" className="w-64 h-10 border text-sm">
              <option value="" selected disabled>
                Seleccione el origen
              </option>
            </select>
          </div>
           <div>
            <p className="text-white mb-2 text-sm">Origen</p>
            <select name="" id="" className="w-64 h-10 border text-sm">
              <option value="" selected disabled>
                Seleccione el origen
              </option>
            </select>
          </div>
        </div>
        {/* Boton comprar */}
        <button className="my-9 bg-red-500 py-3 px-8 rounded-3xl">Comprar</button>
      </div>
    </div>
  );
}
