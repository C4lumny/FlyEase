//Imports de componentes
import { FlightHeader } from "../../components/Booking/FlightHeader";
import { ClientInfoCard } from "../../components/Booking/ClientInfoCard.jsx";
import { Footer } from "../../components/Footer-flyease";
import PlaneSeats from "../../components/Booking/PlaneSeats.jsx";
//Imports de contextos
import { useFlightContext } from "../../context/FlightProvider.jsx";
import { useSelectedFlightContext } from "../../context/SelectedFlight.jsx";
import { useClientContext } from "../../context/ClientProvider.jsx";
import { useSeatsContext } from "../../context/SeatsProvider.jsx";
//Imports de funciones
import { useInsertBoleto } from "../../api/useInsertBoleto.js";

export function Ticket() {
  const { flightInfo } = useFlightContext();
  const { SelectedflightInfo } = useSelectedFlightContext();
  const { clientInfo } = useClientContext();
  const { selectedSeat } = useSeatsContext();
  const insertBoleto = useInsertBoleto();

  console.log(flightInfo);
  console.log(SelectedflightInfo);
  console.log(clientInfo);
  console.log(selectedSeat);

  return (
    <div className="flex flex-col min-h-screen">
      <FlightHeader flightInfo={flightInfo} />
      <div className="ml-24 mr-48 my-16">
        <div className=" grid grid-cols-2 gap-4">
          <div className="ml-16">
            <PlaneSeats idVuelo={SelectedflightInfo.idvuelo} />
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="text-2xl font-bold">Información del cliente</div>
            {selectedSeat ? <ClientInfoCard clientInfo={clientInfo} selectedSeat={selectedSeat.posicion} /> : null}
          </div>
        </div>
        <div className="justify-end flex w-full">
          <button className="px-14 py-2 mt-10 bg-zinc-700 rounded-xl text-white" onClick={() => insertBoleto(clientInfo, SelectedflightInfo, selectedSeat)}>Comprar</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
