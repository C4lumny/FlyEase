import { useFetch } from "../hooks/useFetch";
import { useFlightContext } from "../context/FlightProvider";
import { Loader } from "./Loader";
import { FlightHeader } from "../components/Booking/FlightHeader.jsx";
import { FlightCard } from "../components/Booking/FlightCard.jsx";
import { Footer } from "../components/Footer-flyease"


export function Flights() {
  //   const { data, error, loading } = useFetch("/Vuelos/GetAllAvailable");
  const { flightInfo } = useFlightContext();

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <p>Ha ocurrido un error: {error}</p>
      ) : (  */}
      <FlightHeader infoVuelo={flightInfo} />
      <main>
        <div>
          <FlightCard />
        </div>
      </main>
      <Footer />
      {/* )}  */}
    </>
  );
}
