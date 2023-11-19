import { FlightHeader } from "../../components/Booking/FlightHeader";
import { useFlightContext } from "../../context/FlightProvider.jsx";
import { useSelectedFlightContext } from "../../context/SelectedFlight.jsx";
import { useClientContext } from "../../context/ClientProvider.jsx";
import { Footer } from "../../components/Footer-flyease";

export function Ticket() {
    const { flightInfo } = useFlightContext();
    const { SelectedflightInfo } = useSelectedFlightContext();
    const { clientInfo } = useClientContext();

    console.log(flightInfo);
    console.log(SelectedflightInfo)
    console.log(clientInfo)

  return (
    <>
      <FlightHeader flightInfo={flightInfo}/>
      <p>El mas insano de la region</p>
      <Footer />
    </>
  );
}
