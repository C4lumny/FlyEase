import { useState } from "react";
import { SearcherForm } from "./components/FlightSearcherForm";
import { Lookup } from "./components/ReservationLookup";

export function TravelSearcher() {
  // Elementos useState
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="w-[70%] m-0">
      {/* Tipo de servicio */}
      <div className="relative flex bg-[rgba(0,0,0,0.6)] items-center border-b border-white text-white box-border">
        <ul className="flex h-16">
          <li
            className={`p-4 text-center w-36 cursor-pointer ${
              activeItem === 0 ? "border-b-2 bg-[rgba(0,0,0,0.4)]" : "hover:border-b-2 "
            }`}
            onClick={() => handleItemClick(0)}
          >
            Vuelos
          </li>
          <li
            className={`p-4 text-center w-36 cursor-pointer ${
              activeItem === 1 ? "border-b-2 bg-[rgba(0,0,0,0.4)]" : "hover:border-b-2"
            }`}
            onClick={() => handleItemClick(1)}
          >
            Reservas
          </li>
        </ul>
      </div>
      {/* Buscador de vuelos */}
      <div className="bg-[rgba(0,0,0,0.7)] p-5 text-white">
          {activeItem === 0 ? <SearcherForm /> : <Lookup />}
      </div>
    </div>
  );
}
