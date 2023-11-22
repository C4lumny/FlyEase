import Logo from "../../assets/Logo_FlyEase.png";
import { Link } from "react-router-dom";
import departureIcon from "../../assets/departure.svg";
import returnIcon from "../../assets/returnIcon.png"
import editIcon from "../../assets/EditIcon.svg";
import { EditFlightSearch } from "./EditFlightSearch";
import { useState, useEffect } from "react";

export function FlightHeader({ flightInfo, showEdit }) {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const fechaIda = flightInfo.departureDate
  const opciones = { weekday: "short", day: "numeric", month: "short", year: "numeric" };
  const fechaIdaFormateada = fechaIda.toLocaleDateString("es-ES", opciones);
  // Fechas de regreso
  let fechaRegreso;
  let fechaRegresoFormateada;
  const [showSearch, setShowSearch] = useState(false);

  if(flightInfo.returnDate) {
    fechaRegreso = flightInfo.returnDate;
    fechaRegresoFormateada = fechaRegreso.toLocaleDateString("es-ES", opciones);
  }

  useEffect(() => {
    if (flightInfo.returnDate) {
      setIsRoundTrip(true);
    } else {
      setIsRoundTrip(false);
    }
  }, [flightInfo]);

  const handleEditClick = () => {
    setShowSearch(true);
  };

  const handleCloseClick = () => {
    setShowSearch(false);
  };

  return (
    <div className="bg-white p-5 sticky">
      <div className="flex mx-48">
        <Link to="/">
          <div className="flex gap-2.5 items-center h-14">
            <img
              src={Logo}
              alt="FlyEase-logo"
              className="w-14 h-full object-cover cursor-pointer hover:rotate-[360deg] ease-in-out duration-[1s]"
            />
            <p className="font-bold text-xl text-red-500 cursor-pointer hover:text-blue-600 transition duration-[0.25s]">
              FlyEase
            </p>
          </div>
        </Link>
        <div className="ml-10 h-14">
          <p className="font-semibold text-lg">
            {flightInfo.origen} a {flightInfo.destino}
          </p>
          <div className="flex gap-5 items-center mt-2 font-light">
            <div className="flex gap-2 items-center ">
              <img src={departureIcon} alt="" className="h-5" />
              <p>{fechaIdaFormateada}</p>
            </div>
            {isRoundTrip && (
              <div className="flex gap-2 items-center ">
              <img src={returnIcon} alt="" className="h-5" />
              <p>{fechaRegresoFormateada}</p>
            </div>
            )}
            {showEdit && (
              <span
                className="flex relative ml-5 gap-1 text-[#0190A0] underline cursor-pointer hover:text-[16.5px] hover:font-semibold"
                onClick={handleEditClick}
              >
                <img src={editIcon} alt="" className="h-5" />
                Editar
              </span>
            )}
            {showSearch && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[3]">
                <div className="bg-black bg-opacity-80 p-10 rounded h-[32rem]">
                  <EditFlightSearch onClose={handleCloseClick} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
