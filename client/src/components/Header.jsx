import logo from "../assets/Logo_FlyEase.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between h-[90px] bg-[#dd2b23] shrink-0">
      {/* Logo divs */}
      <div className="flex gap-2.5 ml-20 items-center">
        <img
          src={logo}
          alt="FlyEase-logo"
          className="w-16 h-16 object-cover cursor-pointer hover:rotate-[360deg] ease-in-out duration-[1s]"
        />
        <p className="font-bold text-xl text-white cursor-pointer hover:text-yellow-300 transition duration-[0.25s]">
          <Link to="/">
          FlyEase
          </Link>
        </p>
      </div>

      {/* Nav divs */}
      <div className="flex w-1/2 items-center justify-center">
        <ul className="flex justify-center gap-16">
          <li className="list-none text-xl font-bold cursor-pointer text-white hover:text-yellow-300 duration-[0.25s]">
            <Link to="/">Inicio</Link>
          </li>
          <li className="list-none text-xl font-bold cursor-pointer text-white hover:text-yellow-300 duration-[0.25s]">
            <Link to="/destinations">Destinos</Link>
          </li>
          <li className="list-none text-xl font-bold cursor-pointer text-white hover:text-yellow-200 duration-[0.25s]">
            <Link to="/About">Acerca de</Link> 
          </li>
        </ul>
      </div>
    </header>
  );
}
