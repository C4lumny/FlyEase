import { TripInput } from "../Search/components/TripInput";
import DateInput from "../Search/components/DateInput";
import { useFetch } from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import closeIcon from "../../assets/closeIcon.png";
import { useFlightContext } from "../../context/FlightProvider";
import { Link } from "react-router-dom";

export function EditFlightSearch({ onClose }) {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const { flightInfo, buscarVuelos } = useFlightContext();
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const { data } = useFetch("/Ciudades/GetAll");
  const date = new Date();

  useEffect(() => {
    if (flightInfo.returnDate) {
      setIsRoundTrip(true);
    } else {
      setIsRoundTrip(false);
    }
  }, [flightInfo]);

  const handleClick = () => {
    let newFlight;

    if (isRoundTrip) {
      newFlight = {
        origen,
        destino,
        departureDate,
        returnDate,
      };
    } else {
      newFlight = {
        origen,
        destino,
        departureDate,
      };
    }
    buscarVuelos(newFlight);
  };

  return (
    <div className="rounded-2xl flex flex-col gap-2 text-black z-">
      <div className="flex justify-between text-white">
        <h1 className="font-semibold text-xl">Editar vuelo</h1>
        <span className="flex cursor-pointer" onClick={onClose}>
          <img src={closeIcon} alt="" className="w-5 h-5" />
        </span>
      </div>

      <TripInput placeholder={"Ciudad de Origen"} data={data} setValue={setOrigen} />
      <TripInput placeholder={"Ciudad de Destino"} data={data} setValue={setDestino} />
      <div className="text-black">
        <DateInput label={"Ida"} minDate={date} selectedDate={departureDate} setSelectedDate={setDepartureDate} />
      </div>
      {isRoundTrip && (
        <div className="text-black">
          <DateInput
            label={"Vuelta"}
            minDate={!departureDate ? date : departureDate}
            selectedDate={returnDate}
            setSelectedDate={setReturnDate}
            placeholder="Ciudad de destino"
            disabled={!isRoundTrip || !departureDate}
          />
        </div>
      )}
      <Link to={"/booking"}>
        <button className="mt-9 mb-5 bg-red-500 py-2 px-8 rounded-3xl w-60 text-white" onClick={handleClick}>
          Buscar
        </button>
      </Link>
    </div>
  );
}
