import logo from "../../assets/Logo_FlyEase.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between h-[120px]">
      {/* Logo divs */}
      <div className="flex gap-2.5 ml-20 items-center">
        <img
          src={logo}
          alt="FlyEase-logo"
          className="w-20 cursor-pointer hover:rotate-[360deg] ease-in-out duration-[1s]"
        />
        <p className="font-bold text-xl text-[#ff3e41] cursor-pointer hover:text-[#0070ff] transition duration-[0.25s]">
          <Link to="/">
          FlyEase
          </Link>
        </p>
      </div>

      {/* Nav divs */}
      <div className="flex w-1/2 items-center justify-center">
        <ul className="flex justify-center gap-16">
          <li className="list-none text-xl font-bold cursor-pointer text-[#ff3e41] hover:text-[#0070ff] duration-[0.25s]">
            <Link to="/">Inicio</Link>
          </li>
          <li className="list-none text-xl font-bold cursor-pointer text-[#ff3e41] hover:text-[#0070ff] duration-[0.25s]">
            <Link to="/Vuelos">Vuelos</Link>
          </li>
          <li className="list-none text-xl font-bold cursor-pointer text-[#ff3e41] hover:text-[#0070ff] duration-[0.25s]">
            <Link to="/About">Acerca</Link> de
          </li>
        </ul>
      </div>
    </header>
  );
}
