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
import { useRoundtripFlightContext } from "../../context/RoundtripFlightProvider.jsx";
import { useClientContext } from "../../context/ClientProvider.jsx";
import { useSeatsContext } from "../../context/SeatsProvider.jsx";
//Imports de funciones

export function Ticket() {
  const [preferenceId, setPreferenceId] = useState(null);
  const { flightInfo } = useFlightContext();
  const { SelectedflightInfo } = useSelectedFlightContext();
  const { RoundtripflightInfo } = useRoundtripFlightContext();
  const { clientInfo } = useClientContext();
  const { selectedSeatDeparture, selectedSeatReturn } = useSeatsContext();
  let precioVuelo;

  if (!RoundtripflightInfo) {
    precioVuelo = SelectedflightInfo.preciovuelo;
  } else {
    precioVuelo = SelectedflightInfo.preciovuelo + RoundtripflightInfo.preciovuelo;
  }

  initMercadoPago("TEST-b662e221-e1ef-4721-b5c0-763a46d5e94b");

  const createPreference = async () => {
    try {
      const response = await axios.post("https://flyease.onrender.com/create_preference", {
        description:
          `Vuelo ida: ${SelectedflightInfo.idvuelo}` +
          (RoundtripflightInfo ? ` Vuelo vuelta: ${RoundtripflightInfo.idvuelo}` : ""),
        price: precioVuelo,
        quantity: 1,
      });

      const { id } = response.data;
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

  console.log(SelectedflightInfo);
  console.log(RoundtripflightInfo);

  //SessionStorage para persistir la informacion en caso de una actualizacion
  sessionStorage.setItem("cliente", JSON.stringify(clientInfo));
  sessionStorage.setItem("vueloIda", JSON.stringify(SelectedflightInfo));
  sessionStorage.setItem("vueloVuelta", JSON.stringify(RoundtripflightInfo));
  sessionStorage.setItem("asientoIda", JSON.stringify(selectedSeatDeparture));
  sessionStorage.setItem("asientoRetorno", JSON.stringify(selectedSeatReturn));

  return (
    <div className="flex flex-col min-h-screen">
      <FlightHeader flightInfo={flightInfo} />
      <div className="w-full">
        {/* Cuadricula de asientos */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 items-center mt-10">
          <div className="flex justify-center">
            <PlaneSeats idVuelo={SelectedflightInfo.idvuelo} />
          </div>
          {RoundtripflightInfo && (
            <div className="flex justify-center">
              <PlaneSeats idVuelo={RoundtripflightInfo.idvuelo} isReturnFlight={true} />
            </div>
          )}
        </div>
        {/* Informacion dle cliente */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 mt-16">
          <div className="flex flex-col justify-center mr-10">
            <div className="text-2xl font-bold">Información del cliente</div>
            {selectedSeatDeparture ? (
              <ClientInfoCard clientInfo={clientInfo} selectedSeat={selectedSeatDeparture.posicion} />
            ) : (
              <ClientInfoCard clientInfo={clientInfo} selectedSeat={""} />
            )}
          </div>
          {RoundtripflightInfo && (
            <div className="flex flex-col justify-center ml-10">
              <div className="text-2xl font-bold">Información del cliente</div>
              {selectedSeatReturn ? (
                <ClientInfoCard clientInfo={clientInfo} selectedSeat={selectedSeatReturn.posicion} />
              ) : (
                <ClientInfoCard clientInfo={clientInfo} selectedSeat={""} />
              )}
            </div>
          )}
        </div>
        <div className="items-end justify-center flex w-full mx-auto max-w-7xl flex-col">
          <button
            className="px-14 py-2 my-10 bg-zinc-700 rounded-xl text-white"
            onClick={handleBuy}
            disabled={RoundtripflightInfo ? !(selectedSeatDeparture && selectedSeatReturn) : !selectedSeatDeparture}
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
