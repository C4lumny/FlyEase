import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import mapIcon from "../../../assets/mapPin.svg";

export function TripInput({ placeholder, data, setValue, shouldUseParam }) {
  const [inputValue, setInputValue] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [apiResults, setResults] = useState();
  const searchTimeout = useRef(null);
  const { nombre = "" } = useParams();

  useEffect(() => {
    setResults(data);
  }, [data]);

  useEffect(() => {
    if (nombre && shouldUseParam) {
      setInputValue(nombre);
      setValue(nombre);
    }
  }, [nombre, shouldUseParam, setValue]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setValue(value);

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
    var results = data.filter((item) => item.nombre.toLowerCase().startsWith(wordSearched.toLowerCase()));
    return results;
  };

  return (
    <div>
      {placeholder === "Ciudad de origen" ? (
        <p className="text-white mb-2 text-sm">Origen</p>
      ) : (
        <p className="text-white mb-2 text-sm">Destino</p>
      )}
      <div className="flex relative items-center">
        <img src={mapIcon} alt="" className="absolute h-4 w-4 left-2" />
        <input
          className="w-64 h-10 border text-sm pl-8"
          type="text"
          placeholder={placeholder}
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
        <ul className="absolute bg-slate-100 py-2 w-64 border-b border-gray cursor-pointer z-10">
          {apiResults.length > 0 && apiResults.some((result) => result.nombre.toLowerCase().includes(inputValue.toLowerCase())) ? (
            apiResults.map((item) => (
              <li
                key={item.idciudad}
                className="p-1 hover:bg-blue-300 hover:text-blue-600 "
                onClick={() => {
                  setInputValue(item.nombre)
                  setValue(item.nombre)
                }}
              >
                {item.nombre}
              </li>
            ))
          ) : inputValue && !apiResults.some((result) => result.nombre.toLowerCase().includes(inputValue.toLowerCase())) ? (
            <li className="p-1 text-center">No se encontraron resultados</li>
          ) : null}
        </ul>
      )}
    </div>
  );
}
