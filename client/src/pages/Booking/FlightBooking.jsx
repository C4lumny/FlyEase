import { useFetch } from "../../hooks/useFetch.js";
import { useFlightContext } from "../../context/FlightProvider.jsx";
import { useSelectedFlightContext } from "../../context/SelectedFlight.jsx";
import { Loader } from "../Loader.jsx";
import { FlightHeader } from "../../components/Booking/FlightHeader.jsx";
import { FlightCard } from "../../components/Booking/FlightCard.jsx";
import { Footer } from "../../components/Footer-flyease.jsx";
import { formatDate } from "../../utils/dateUtil.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Flights() {
  const { data, error, loading } = useFetch("/Vuelos/GetAllAvailable");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const { flightInfo } = useFlightContext();
  const { newSelectedFlight } = useSelectedFlightContext();
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  useEffect(() => {
    if (flightInfo.returnDate) {
      setIsRoundTrip(true);
    } else {
      setIsRoundTrip(false);
    }
  }, [flightInfo]);

  const flightsFliter = (flightInfo) => {
    const { origen, destino, departureDate } = flightInfo;
    const dateUser = formatDate(departureDate);
    const flights = data.filter(
      (flight) =>
        flight.aeropuerto_Despegue.ciudad.nombre == origen &&
        flight.aeropuerto_Destino.ciudad.nombre == destino &&
        formatDate(flight.fechayhoradesalida) == dateUser
    );
    return flights;
  };

  const handleFlightClick = (flight) => {
    setSelectedFlight(flight);
    newSelectedFlight(flight);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Ha ocurrido un error: {error}</p>
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <FlightHeader flightInfo={flightInfo} showEdit={true} />
          <main>
            {/* Cards */}
            <div className="flex flex-col gap-7 my-10">
              <h1 className="mx-48 text-3xl font-semibold">Vuelos disponibles</h1>
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
            <div className="mx-48 flex justify-end">
              <Link to={isRoundTrip ? "/booking/round-trip" : "/booking/details"}>
                <button
                  className="mr-2 mb-10 py-3 px-10 bg-zinc-900 text-white font-semibold rounded-full"
                  disabled={!selectedFlight}
                  hidden={!(flightsFliter(flightInfo).length > 0)} // Deshabilita el botón si no hay ningún vuelo seleccionado
                >
                  Continuar
                </button>
              </Link>
            </div>
          </main>
          <Footer />
          <div />
        </div>
      )}
    </>
  );
}
