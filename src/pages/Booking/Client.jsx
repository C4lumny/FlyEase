import { FlightHeader } from "../../components/Booking/FlightHeader";
import { Footer } from "../../components/Footer-flyease";
import { FlightCard } from "../../components/Booking/FlightCard.jsx";
import { useFlightContext } from "../../context/FlightProvider.jsx";
import { useSelectedFlightContext } from "../../context/SelectedFlight.jsx";

export function Client() {
  const { flightInfo } = useFlightContext();
  const { SelectedflightInfo } = useSelectedFlightContext();

  return (
    <div>
      <FlightHeader flightInfo={flightInfo}/>
        <div>
            <FlightCard vuelo={SelectedflightInfo} isSelected={true} />
        </div>
      <Footer />
    </div>
  );
}
