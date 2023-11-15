import Logo from "../../assets/Logo_FlyEase.png";
import { Link } from "react-router-dom";
import departureIcon from "../../assets/departure.svg";
import editIcon from "../../assets/EditIcon.svg";

export function FlightHeader({infoVuelo}) {
  const fecha = infoVuelo.departureDate;
  const opciones = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
  const fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);

  return (
    <div className="bg-white p-5 ">
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
            {infoVuelo.origen} a {infoVuelo.destino}
          </p>
          <div className="flex gap-5 items-center mt-2 font-light">
            <div className="flex gap-2 items-center ">
              <img src={departureIcon} alt="" className="h-5" />
              <p>{fechaFormateada}</p>
            </div>
            <span className="flex relative ml-5 gap-1 text-[#0190A0] underline cursor-pointer hover:text-[16.5px] hover:font-semibold">
              <img src={editIcon} alt="" className="h-5" />
              Editar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
