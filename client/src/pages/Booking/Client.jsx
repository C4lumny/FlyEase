import { FlightHeader } from "../../components/Booking/FlightHeader";
import { Footer } from "../../components/Footer-flyease";
import { FlightCard } from "../../components/Booking/FlightCard.jsx";
import { useFlightContext } from "../../context/FlightProvider.jsx";
import { useSelectedFlightContext } from "../../context/SelectedFlight.jsx";
import { useRoundtripFlightContext } from "../../context/RoundtripFlightProvider.jsx";
import { useClientContext } from "../../context/ClientProvider.jsx";
import { useState } from "react";
import departureIcon from "../../assets/departure.svg";
import returnIcon from "../../assets/returnIcon.png";
import { Link } from "react-router-dom";

export function Client() {
  // Definicion de contextos
  const { flightInfo } = useFlightContext();
  const { SelectedflightInfo } = useSelectedFlightContext();
  const { RoundtripflightInfo } = useRoundtripFlightContext();
  const { crearCliente } = useClientContext();
  // Definicion de estados
  const [tipodocumento, setTipoDocumento] = useState("");
  const [numerodocumento, setNumeroCedula] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [celular, setCelular] = useState("");
  const [correo, setCorreo] = useState("");
  const fecharegistro = new Date().toISOString();
  const [inputFocus, setInputFocus] = useState({
    tipoDocumento: false,
    numeroCedula: false,
    nombres: false,
    apellidos: false,
    celular: false,
    correo: false,
  });

  const [inputHasValue, setInputHasValue] = useState({
    tipoDocumento: false,
    numeroCedula: false,
    nombres: false,
    apellidos: false,
    celular: false,
    correo: false,
  });

  const handleInputChange = (inputName, value) => {
    setInputHasValue({ ...inputHasValue, [inputName]: value !== "" });
  };

  const handleFocus = (inputName) => {
    setInputFocus({ ...inputFocus, [inputName]: true });
  };

  const handleBlur = (inputName) => {
    setInputFocus({ ...inputFocus, [inputName]: false });
  };

  const client = {
    numerodocumento,
    tipodocumento,
    nombres,
    apellidos,
    celular,
    correo,
    fecharegistro,
  };

  const handleInput = (e, setter) => {
    const newInputValue = e.target.value.replace(/[^0-9]/g, ""); // Elimina caracteres no numéricos

    if (newInputValue.length <= 10) {
      setter(newInputValue);
    }
  };

  const handleInputLettersOnly = (e, setter) => {
    const newInputValue = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Elimina números y caracteres especiales

    setter(newInputValue);
  };

  const postHandler = () => {
    crearCliente(client);
  };

  const allFieldsFilled = Object.values(inputHasValue).every((value) => value === true);

  return (
    <div className="flex flex-col min-h-screen">
      <FlightHeader flightInfo={flightInfo} />
      <div className="mt-10">
        {/* Titulo ida */}
        <div className="flex mx-48 mb-5 items-center gap-2">
          <img src={departureIcon} alt="" className="h-5 w-5" />
          <p className="text-2xl font-semibold">
            Ida: {flightInfo.origen} a {flightInfo.destino}
          </p>
        </div>
        <FlightCard vuelo={SelectedflightInfo} isSelected={true} />
        {/* Titulo vuelta */}
        {RoundtripflightInfo && (
          <>
            <div className="flex mx-48 my-5 items-center gap-2">
              <img src={returnIcon} alt="" className="h-5 w-5" />
              <p className="text-2xl font-semibold">
                Vuelta: {flightInfo.destino} a {flightInfo.origen}
              </p>
            </div>
            <FlightCard vuelo={RoundtripflightInfo} isSelected={true} />
          </>
        )}

        <div className="w-full flex items-center justify-center my-14">
          <div className="w-full mx-48 bg-white rounded-xl shadow-[1px_1px_10px_2px_rgba(0,0,0,0.1);] px-12 pb-4 pt-11">
            <p className="text-lg font-semibold mb-5">
              Pasajero:{" "}
              <span className="font-normal">
                {nombres} {apellidos}
              </span>
            </p>
            {/* Cedula */}
            <div className="flex gap-5 mb-7">
              <div className="relative">
                {/* Select tipo cedula */}
                <select
                  id="tipoDocumento"
                  className="border border-zinc-300 px-2 py-4 w-56 rounded-2xl"
                  onFocus={() => handleFocus("tipoDocumento")}
                  onBlur={() => handleBlur("tipoDocumento")}
                  onChange={(e) => {
                    handleInputChange("tipoDocumento", e.target.value);
                    setTipoDocumento(e.target.value);
                  }}
                >
                  {/* Opciones del select */}
                  <option value="" disabled selected></option>
                  <option value="CC">CC</option>
                  <option value="CE">CE</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
                <label
                  htmlFor="tipoDocumento"
                  className={`absolute left-2 ease-in-out text-sm duration-200 select-none ${
                    inputFocus.tipoDocumento || inputHasValue.tipoDocumento
                      ? "top-1 text-[#555] text-xs"
                      : "top-5 text-[#aaa]"
                  }`}
                >
                  Tipo de documento
                </label>
              </div>
              {/* Input nro cedula */}
              <div className="relative w-full">
                <input
                  type="text"
                  id="numeroCedula"
                  className="border border-zinc-300 px-3 py-4 w-full rounded-2xl"
                  value={numerodocumento}
                  pattern="[0-9]*"
                  onInput={(e) => handleInput(e, setNumeroCedula)}
                  max={10}
                  onFocus={() => handleFocus("numeroCedula")}
                  onBlur={() => handleBlur("numeroCedula")}
                  onChange={(e) => {
                    handleInputChange("numeroCedula", e.target.value);
                  }}
                />
                <label
                  htmlFor="numeroCedula"
                  className={`absolute left-3 top-5 text-[#aaa] text-lg- ease-in-out duration-200 select-none  ${
                    inputFocus.numeroCedula || inputHasValue.numeroCedula
                      ? "top-[0.2rem] text-[#555] text-xs"
                      : "top-4 text-[#aaa]"
                  }`}
                >
                  Numero de cedula
                </label>
              </div>
            </div>
            {/* Nombres y apellidos */}
            <div className="flex gap-5 mb-7">
              {/* Nombres */}
              <div className="relative w-1/2">
                <input
                  type="text"
                  id="nombres"
                  className="border border-zinc-300 px-3 py-4 w-full rounded-2xl"
                  onFocus={() => handleFocus("nombres")}
                  value={nombres}
                  onBlur={() => handleBlur("nombres")}
                  onChange={(e) => {
                    handleInputChange("nombres", e.target.value);
                    handleInputLettersOnly(e, setNombres)
                  }}
                />
                <label
                  htmlFor="nombres"
                  className={`absolute left-3 top-5 text-[#aaa] text-lg- ease-in-out duration-200 select-none  ${
                    inputFocus.nombres || inputHasValue.nombres
                      ? "top-[0.2rem] text-[#555] text-xs"
                      : "top-4 text-[#aaa]"
                  }`}
                >
                  Nombres
                </label>
              </div>
              {/* Apellidos */}
              <div className="relative w-1/2">
                <input
                  type="text"
                  id="apellidos"
                  className="border border-zinc-300 px-3 py-4 w-full rounded-2xl"
                  onFocus={() => handleFocus("apellidos")}
                  onInput={(e) => handleInputLettersOnly(e, setApellidos)}
                  value={apellidos}
                  onBlur={() => handleBlur("apellidos")}
                  onChange={(e) => {
                    handleInputChange("apellidos", e.target.value);
                  }}
                />
                <label
                  htmlFor="apellidos"
                  className={`absolute left-3 top-5 text-[#aaa] text-lg- ease-in-out duration-200 select-none  ${
                    inputFocus.apellidos || inputHasValue.apellidos
                      ? "top-[0.2rem] text-[#555] text-xs"
                      : "top-4 text-[#aaa]"
                  }`}
                >
                  Apellidos
                </label>
              </div>
            </div>
            {/* Celular y correo */}
            <div className="flex gap-5 mb-7">
              {/* Celular */}
              <div className="relative w-1/2">
                <input
                  type="text"
                  id="celular"
                  className="border border-zinc-300 px-3 py-4 w-full rounded-2xl"
                  value={celular}
                  onInput={(e) => handleInput(e, setCelular)}
                  onFocus={() => handleFocus("celular")}
                  onBlur={() => handleBlur("celular")}
                  onChange={(e) => {
                    handleInputChange("celular", e.target.value);
                  }}
                />
                <label
                  htmlFor="celular"
                  className={`absolute left-3 top-5 text-[#aaa] text-lg- ease-in-out duration-200 select-none  ${
                    inputFocus.celular || inputHasValue.celular
                      ? "top-[0.2rem] text-[#555] text-xs"
                      : "top-4 text-[#aaa]"
                  }`}
                >
                  Numero de telefono
                </label>
              </div>
              {/* Correo */}
              <div className="relative w-1/2">
                <input
                  type="email"
                  id="correo"
                  className="border border-zinc-300 px-3 py-4 w-full rounded-2xl"
                  onFocus={() => handleFocus("correo")}
                  onBlur={() => handleBlur("correo")}
                  onChange={(e) => {
                    handleInputChange("correo", e.target.value);
                    setCorreo(e.target.value);
                  }}
                />
                <label
                  htmlFor="correo"
                  className={`absolute left-3 top-5 text-[#aaa] text-lg- ease-in-out duration-200 select-none  ${
                    inputFocus.correo || inputHasValue.correo ? "top-[0.2rem] text-[#555] text-xs" : "top-4 text-[#aaa]"
                  }`}
                >
                  Correo electronico
                </label>
              </div>
            </div>
            <Link to="/booking/details/ticket" onClick={postHandler}>
              <button
                className="mr-2 mb-10 py-3 px-10 bg-zinc-900 text-white font-semibold rounded-full"
                disabled={!allFieldsFilled}
              >
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
