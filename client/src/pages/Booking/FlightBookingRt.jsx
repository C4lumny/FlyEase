import { useSelectedFlightContext } from "../../context/SelectedFlight";
import { useFlightContext } from "../../context/FlightProvider";
import { useRoundtripFlightContext } from "../../context/RoundtripFlightProvider.jsx";
import { FlightHeader } from "../../components/Booking/FlightHeader";
import { FlightCard } from "../../components/Booking/FlightCard";
import { Footer } from "../../components/Footer-flyease";
import { formatDate } from "../../utils/dateUtil.js";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import departureIcon from "../../assets/departure.svg";
import { Loader } from "../Loader.jsx";
import { Link } from "react-router-dom";

export function RoundTripFlight() {
  const { SelectedflightInfo } = useSelectedFlightContext();
  const [selectedFlight, setSelectedFlight] = useState(null);
  const { data, error, loading } = useFetch("/Vuelos/GetAllAvailable");
  const { flightInfo } = useFlightContext();
  const { crearVueloRetorno } = useRoundtripFlightContext();

  const handleFlightClick = (flight) => {
    setSelectedFlight(flight);
    crearVueloRetorno(flight);
  };

  console.log(SelectedflightInfo);
  console.log(selectedFlight);

  const flightsFliter = (flightInfo) => {
    const { origen, destino, returnDate } = flightInfo;

    const dateUser = formatDate(returnDate);
    const flights = data.filter(
      (flight) =>
        flight.aeropuerto_Despegue.ciudad.nombre == destino &&
        flight.aeropuerto_Destino.ciudad.nombre == origen &&
        formatDate(flight.fechayhoradesalida) == dateUser
    );
    return flights;
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Ha ocurrido un error: {error}</p>
      ) : (
        <div className="flex flex-col min-h-screen">
          <FlightHeader flightInfo={flightInfo} />
          <div className="max-w-full">
            {/* Titulo ida */}
            <div className="mt-10 mb-3 flex items-center gap-3 mx-48">
              <img src={departureIcon} alt="" className="w-5 h-5" />
              <h1 className="text-2xl font-semibold">
                Ida: {flightInfo.origen} a {flightInfo.destino}
              </h1>
            </div>
            {/* FlightCard Ida */}
            <FlightCard vuelo={SelectedflightInfo} isSelected={true} />
            {/* Titulo vuelta */}
            <div className="flex flex-col gap-3 my-5">
              <h1 className="mx-48 mt-10 text-3xl font-semibold">Vuelos disponibles</h1>
              {flightsFliter(flightInfo).length > 0 ? (
                flightsFliter(flightInfo).map((flight) => (
                  <FlightCard
                    key={flight.idvuelo}
                    vuelo={flight}
                    boleto={() => handleFlightClick(flight)}
                    isSelected={flight === selectedFlight}
                  />
                ))
              ) : (
                <div className="mx-48 text-xl font-semibold text-gray-500">
                  No hay vuelos disponibles con los criterios seleccionados.
                </div>
              )}
            </div>
          </div>
          <div className="mx-48 flex justify-end">
            <Link to={"/booking/details"}>
              <button
                className="mr-2 mb-10 py-3 px-10 bg-zinc-900 text-white font-semibold rounded-full"
                disabled={!selectedFlight}
                hidden={!(flightsFliter(flightInfo).length > 0)}
              >
                Continuar
              </button>
            </Link>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
