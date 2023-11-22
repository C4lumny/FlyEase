import { useState } from "react";
import hash from "../../../assets/hash.svg";
import { useNavigate } from "react-router-dom";

export function Lookup() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    const newInputValue = e.target.value.replace(/[^0-9]/g, ""); // Elimina caracteres no numéricos

    if (newInputValue.length <= 10) {
      setInputValue(newInputValue);
    }
  };

  const handleClick = () => {
    navigate(`/flightrecord/${inputValue}`);
  }

  return (
    <div className="py-6 px-6">
      <h1 className="text-2xl mb-4">Consulte el estado de su vuelo</h1>
      <div className="flex relative items-center mt-6">
        <img src={hash} alt="" className="absolute h-4 w-4 left-3" />
        <input
          type="text"
          name=""
          id=""
          max={10}
          className="text-black w-96 h-10 border text-sm pl-8"
          placeholder="Ingrese su numero de documento"
          value={inputValue}
          onChange={handleInput}
        />
          <button
            type="button"
            className="mx-6 bg-red-500 py-2 px-8 rounded-3xl w-30"
            disabled={!inputValue} // Deshabilita el botón si el input está vacío
            onClick={handleClick}
          >
            Buscar
          </button>
      </div>
    </div>
  );
}
