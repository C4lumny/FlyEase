import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
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

export function Ticket() {
  const [preferenceId, setPreferenceId] = useState(null);
  const { flightInfo } = useFlightContext();
  const { SelectedflightInfo } = useSelectedFlightContext();
  const { clientInfo } = useClientContext();
  const { selectedSeat } = useSeatsContext();

  initMercadoPago("TEST-b662e221-e1ef-4721-b5c0-763a46d5e94b");

  const createPreference = async () => {
    try {
      // const response = await axios.post("https://flyease-dev-hcss.4.us-1.fl0.io/create_preference", {
        const response = await axios.post("http://localhost:8080/create_preference", {
        description: "Insano",
        price: 100000,
        quantity: 1,
      });

      const { id } = response.data;
      console.log(response);
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

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
            {selectedSeat ? (
              <ClientInfoCard clientInfo={clientInfo} selectedSeat={selectedSeat.posicion} />
            ) : (
              <ClientInfoCard clientInfo={clientInfo} selectedSeat={""} />
            )}
          </div>
        </div>
        <div className="items-end justify-center flex w-full flex-col">
          <button
            className="px-14 py-2 mt-10 bg-zinc-700 rounded-xl text-white"
            onClick={() => {
              // insertBoleto(clientInfo, SelectedflightInfo, selectedSeat);
              handleBuy();
            }}
          >
            Comprar
          </button>
          {preferenceId && <Wallet initialization={{ preferenceId, redirectMode: "modal" }} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
