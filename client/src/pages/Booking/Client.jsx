import { FlightHeader } from "../../components/Booking/FlightHeader";
import { Footer } from "../../components/Footer-flyease";
import { FlightCard } from "../../components/Booking/FlightCard.jsx";
import { useFlightContext } from "../../context/FlightProvider.jsx";
import { useSelectedFlightContext } from "../../context/SelectedFlight.jsx";
import { useClientContext } from "../../context/ClientProvider.jsx";
import { useState } from "react";
import departureIcon from "../../assets/departure.svg";
import { Link } from "react-router-dom";

export function Client() {
  // Definicion de contextos
  const { flightInfo } = useFlightContext();
  const { SelectedflightInfo } = useSelectedFlightContext();
  const { crearCliente } = useClientContext();
  // Definicion de estados
  const [inputFocused, setInputFocused] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);
  const [inputHasValue, setInputHasValue] = useState(false);
  const [selectHasValue, setSelectHasValue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [tipodocumento, setTipoDocumento] = useState("");
  const [numerodocumento, setNumeroCedula] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [celular, setCelular] = useState("");
  const [correo, setCorreo] = useState("");
  const fecharegistro = new Date().toISOString();


  const client = {
    numerodocumento,
    tipodocumento,
    nombres,
    apellidos,
    celular,
    correo,
    fecharegistro,
  };

  const handleInput = (e) => {
    const newInputValue = e.target.value.replace(/[^0-9]/g, ""); // Elimina caracteres no numéricos

    if (newInputValue.length <= 10) {
      setInputValue(newInputValue);
    }
  };

  const postHandler = () => {
    crearCliente(client);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <FlightHeader flightInfo={flightInfo} />
      <div className="mt-10">
        <div className="flex mx-48 mb-5 items-center gap-2">
          <img src={departureIcon} alt="" className="h-5 w-5" />
          <p className="text-2xl font-semibold">
            Ida: {flightInfo.origen} a {flightInfo.destino}
          </p>
        </div>
        <FlightCard vuelo={SelectedflightInfo} isSelected={true} />
        <div className="w-full flex items-center justify-center my-14">
          <div className="w-full mx-48 h-80 bg-white rounded-xl shadow-[1px_1px_10px_2px_rgba(0,0,0,0.1);] px-12 pb-4 pt-11">
            <p className="text-lg font-semibold mb-5">Pasajero: </p>
            <div className="flex gap-5">
              {/* Cedula */}
              <div className="relative">
                <select
                  id="prueba"
                  className="border border-zinc-300 px-2 py-4 w-56"
                  onFocus={() => setSelectFocused(true)}
                  onBlur={() => setSelectFocused(false)}
                  onChange={(e) => {
                    setSelectHasValue(e.target.value !== "");
                    setTipoDocumento(e.target.value);
                  }}
                >
                  <option value="" disabled selected></option>
                  <option value="CC">CC</option>
                  <option value="CE">CE</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
                <label
                  htmlFor="prueba"
                  className={`absolute left-2 ease-in-out text-sm duration-200 select-none ${
                    selectFocused || selectHasValue ? "top-1 text-[#555] text-xs" : "top-5 text-[#aaa]"
                  }`}
                >
                  Tipo de documento
                </label>
              </div>
              {/* Input nro cedula */}
              <div className="relative">
                <input
                  type="text"
                  id="prueba"
                  className="border border-zinc-300 px-3 py-4 w-72"
                  value={inputValue}
                  pattern="[0-9]*"
                  onInput={handleInput}
                  max={10}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  onChange={(e) => {
                    setInputHasValue(e.target.value !== "");
                    setNumeroCedula(e.target.value);
                  }}
                />
                <label
                  htmlFor="prueba"
                  className={`absolute left-3 top-5 text-[#aaa] text-lg- ease-in-out duration-200 select-none  ${
                    inputFocused || inputHasValue ? "top-1 text-[#555] text-xs" : "top-4 text-[#aaa]"
                  }`}
                >
                  Numero de cedula
                </label>
              </div>
            </div>
            <div className="flex">
              {/* Nombres */}
              <input
                type="text"
                className="border border-zinc-300 px-3 py-4 w-72"
                placeholder="nombres"
                onChange={(e) => setNombres(e.target.value)}
              />
              {/* Apellidos */}
              <input
                type="text"
                className="border border-zinc-300 px-3 py-4 w-72"
                placeholder="apellidos"
                onChange={(e) => setApellidos(e.target.value)}
              />
            </div>
            {/* Celular */}
            <input
              type="text"
              className="border border-zinc-300 px-3 py-4 w-72"
              placeholder="celular"
              onChange={(e) => setCelular(e.target.value)}
            />
            {/* Correo */}
            <input
              type="email"
              className="border border-zinc-300 px-3 py-4 w-72"
              placeholder="correo"
              onChange={(e) => setCorreo(e.target.value)}
            />
            <Link to="/booking/details/ticket" onClick={postHandler}>
              <button className="mr-2 mb-10 py-3 px-10 bg-zinc-900 text-white font-semibold rounded-full">
                Continuar
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
