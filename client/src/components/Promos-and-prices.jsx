import { Link } from "react-router-dom";
import { useFlightContext } from "../context/FlightProvider.jsx";
import { formatDate } from "../utils/dateUtil";

export function PromosAndPrices({ vuelo }) {
  const precioVuelo = vuelo.preciovuelo.toLocaleString("es-ES");
  const fechaDate = new Date(formatDate(vuelo.fechayhoradesalida));
  fechaDate.setDate(fechaDate.getDate() + 1);
  const { buscarVuelos } = useFlightContext();
  const opciones = { weekday: "short", day: "numeric", month: "short", year: "numeric" };
  const fechaParaMostrar = fechaDate.toLocaleDateString("es-ES", opciones);

  const handleClick = () => {
    buscarVuelos({
      origen: vuelo.aeropuerto_Despegue.ciudad.nombre,
      destino: vuelo.aeropuerto_Destino.ciudad.nombre,
      departureDate: fechaDate,
    });
  }

  return (
    <div className="h-80 w-[25%] rounded-3xl mx-1 relative overflow-hidden ">
      <img
        src={`data:image/webp;base64, ${vuelo.aeropuerto_Destino.ciudad.imagen}`}
        alt=""
        className="object-cover w-full h-full rounded-3xl brightness-50 hover:transform hover:scale-105 transition-all duration-500"
      />
      <div className="absolute bottom-0 left-0 p-4 text-white z-10">
        <Link to="/booking">
          <h2 className="text-xl font-bold cursor-pointer hover:text-red-400 ease-in-out duration-300 hover:underline" onClick={handleClick}>
            desde {vuelo.aeropuerto_Despegue.ciudad.nombre} a {vuelo.aeropuerto_Destino.ciudad.nombre}
          </h2>
          <p>{fechaParaMostrar}</p>
        </Link>
        <p className="">COP${precioVuelo}</p>
      </div>
    </div>
  );
}
