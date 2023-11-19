//Imports de componentes
import { FlightHeader } from "../../components/Booking/FlightHeader";
import { ClientInfoCard } from "../../components/Booking/ClientInfoCard.jsx";
import { Footer } from "../../components/Footer-flyease";
import PlaneSeats from "../../components/Booking/PlaneSeats.jsx";
//Imports de contextos
import { useFlightContext } from "../../context/FlightProvider.jsx";
import { useSelectedFlightContext } from "../../context/SelectedFlight.jsx";
import { useClientContext } from "../../context/ClientProvider.jsx";

export function Ticket() {
  const { flightInfo } = useFlightContext();
  const { SelectedflightInfo } = useSelectedFlightContext();
  const { clientInfo } = useClientContext();

  console.log(flightInfo);
  console.log(SelectedflightInfo);
  console.log(clientInfo);

  return (
    <div className="flex flex-col min-h-screen">
      <FlightHeader flightInfo={flightInfo} />
      <div className="">
        <div className="mx-48 my-16 grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <div className="text-2xl font-bold">Información del cliente</div>
            <ClientInfoCard clientInfo={clientInfo} />
          </div>
          <PlaneSeats />
        </div>
      </div>
      <Footer />
    </div>
  );
}
