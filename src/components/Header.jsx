import React from "react";
import logo from "../assets/Logo_FlyEase.png";

export function Header() {
  return (
    <header className="flex justify-center h-[120px]">
      {/* Logo divs */}
      <div className="flex gap-2.5 ml-20 items-center w-[45%]">
        <img src={logo} alt="FlyEase-logo" className="w-20 cursor-pointer hover:rotate-[360deg] ease-in-out duration-[1s]" />
        <p className="font-bold text-xl text-[#ff3e41] cursor-pointer hover:text-[#0070ff] transition duration-[0.25s]">FlyEase</p>
      </div>

      {/* Nav divs */}
      <div className="flex w-1/2 items-center justify-center">
        <ul className="flex justify-center gap-16">
          <li className="list-none text-xl font-bold cursor-pointer text-[#ff3e41] hover:text-[#0070ff] duration-[0.25s]">Inicio</li>
          <li className="list-none text-xl font-bold cursor-pointer text-[#ff3e41] hover:text-[#0070ff] duration-[0.25s]">Vuelos</li>
          <li className="list-none text-xl font-bold cursor-pointer text-[#ff3e41] hover:text-[#0070ff] duration-[0.25s]">Acerca de</li>
        </ul>
      </div>
    </header>
  );
}
