import { useFetch } from "../hooks/useFetch";
import { useFlightContext } from "../context/FlightProvider";
import { Loader } from "./Loader";
import { FlightHeader } from "../components/Booking/FlightHeader.jsx";
import { FlightCard } from "../components/Booking/FlightCard.jsx";
import { Footer } from "../components/Footer-flyease";
import { formatDate } from "../utils/dateUtil.js";

export function Flights() {
  const { data, error, loading } = useFetch("/Vuelos/GetAllAvailable");
  let { flightInfo } = useFlightContext();

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

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Ha ocurrido un error: {error}</p>
      ) : (
        <div>
          {/* Header */}
          <FlightHeader flightInfo={flightInfo} />
          <main>
            {/* Cards */}
            <div className="flex flex-col gap-7 my-10">
              {flightsFliter(flightInfo).map((flight) => (
                <FlightCard key={flight.idvuelo} vuelo={flight} />
              ))}
            </div>
          </main>
          <Footer />
          <div />
        </div>
      )}
    </>
  );
}
