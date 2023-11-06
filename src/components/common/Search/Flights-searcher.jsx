import { useState, useRef } from "react";
import { useFetch } from "../../../hooks/useFetch";
import mapIcon from "../../assets/mapPin.svg";

export function Searcher() {
  // Elementos useState
  const [activeItem, setActiveItem] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const { data, loading, error } = useFetch("/Clientes/GetAll");
  const [results, setResults] = useState([]);
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dateReturn, setDateReturn] = useState("");
  // Contador para saber cuando realizar la busqueda a la api
  const searchTimeout = useRef(null);
  // Atributos para validad input de fecha
  const date = new Date();
  const dateRet = new Date(dateReturn);
  dateRet.setDate(dateRet.getDate() + 1);

  const formatDate = (date) => {
    const d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
  };

  console.log(formatDate(date));

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      if (value === "") {
        // No hay texto en el input, no actualices 'results'
        setResults([]);
      } else {
        const filtered = filteredResults(value);
        setResults(filtered);
      }
    }, 500);
  };

  const filteredResults = (wordSearched) => {
    var results = data.filter((item) => item.nombres.toLowerCase().startsWith(wordSearched.toLowerCase()));
    return results;
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
      <div className="bg-[rgba(0,0,0,0.7)] p-5 text-white ">
        {/* Radio buttons */}
        <div className="flex py-4 gap-8">
          <label htmlFor="ida" className="flex gap-3 items-center">
            <input defaultChecked type="radio" name="viaje" id="ida" onChange={() => setIsRoundTrip(false)} className="h-4 w-4" />
            <p>Solo ida</p>
          </label>
          <label htmlFor="ida-vuelta" className="flex gap-3 items-center">
            <input type="radio" name="viaje" id="ida-vuelta" onChange={() => setIsRoundTrip(true)} className="h-4 w-4" />
            <p>Ida y vuelta</p>
          </label>
        </div>
        {/* Inputs */}
        <div className="flex text-black mt-5">
          {/* input origen */}
          <div>
            <p className="text-white mb-2 text-sm">Origen</p>
            <div className="flex relative items-center">
              <img src={mapIcon} alt="" className="absolute h-4 w-4 left-2" />
              <input
                className="w-64 h-10 border text-sm pl-8"
                type="text"
                placeholder="Ciudad de origen"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsActive(true)}
                onBlur={() => {
                  setTimeout(() => {
                    setIsActive(false);
                  }, 100);
                }}
              />
            </div>
            {isActive && inputValue && (
              <ul className="absolute bg-slate-100 py-2 w-64 border-b border-gray cursor-pointer">
                {results.length > 0 && results.some((result) => result.nombres.includes(inputValue)) ? (
                  results.map((item) => (
                    <li
                      key={item.numerodocumento}
                      className="p-1 hover:bg-blue-300 hover:text-blue-600"
                      onClick={() => setInputValue(item.nombres)}
                    >
                      {item.nombres}
                    </li>
                  ))
                ) : inputValue && !results.some((result) => result.nombres.includes(inputValue)) ? (
                  <li className="p-1 text-center">No se encontraron resultados</li>
                ) : null}
              </ul>
            )}
          </div>
          {/* input destino */}
          <div>
            <p className="text-white mb-2 text-sm">Destino</p>
            <div className="flex relative items-center">
              <img src={mapIcon} alt="" className="absolute h-4 w-4 left-2" />
              <input className="w-64 h-10 border text-sm pl-8" type="text" placeholder="Ciudad de destino" />
            </div>
            <ul className="absolute bg-slate-100 py-2 w-64 border-b border-gray cursor-pointer hidden">
              {data?.map((item) => (
                <li key={item.numerodocumento} className="p-1 hover:bg-blue-300 hover:text-blue-600">
                  {item.nombres}
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-10 flex">
            {/* input fecha ida */}
            <div>
              <p className="text-white mb-2 text-sm">Ida</p>
              <div className="flex relative items-center">
                <input
                  className="w-48 h-10 border text-sm pl-8"
                  type="date"
                  placeholder="Ciudad de destino"
                  min={formatDate(date)}
                  onChange={(e) => setDateReturn(new Date(e.target.value))}
                />
              </div>
            </div>
            {/* input fecha vuelta */}
            <div className="">
              <p className="text-white mb-2 text-sm">Vuelta</p>
              <div className="flex relative items-center">
                <input
                  className="w-48 h-10 border text-sm pl-8"
                  type="date"
                  placeholder="Ciudad de destino"
                  min={formatDate(dateRet)}
                  disabled={isRoundTrip ? false : true}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Boton comprar */}
        <button type="button" className="mt-9 mb-5 bg-red-500 py-2 px-8 rounded-3xl w-60">
          Comprar
        </button>
      </div>
    </div>
  );
}
