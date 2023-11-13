//Mostrar titulo del vuelo (Nombre origen + Nombre destino)
//Mostrar imagen del vuelo
//Mostrar precio
// AIzaSyCWqBql4PAkcyYoXfrLxPN71eSy2Q4JECY

import { useState } from "react";

export function FlightCard({ vuelo }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="w-[45%] h-56 flex border border-gray-300 text-gray-600 hover:bg-[#dd2b23] hover:text-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <picture className="w-1/2">
        <img
          className="h-[13.9rem] brightness-75 w-full object-cover"
          src={`data:image/webp;base64, ${vuelo.aereopuerto_Destino.ciudad.imagen}`}
          alt="imagen ciudad"
        />
      </picture>
      <article className="w-1/2 h-full">
        <h2 className="text-base mx-5 mt-5">
          {vuelo.aereopuerto_Despegue.ciudad.nombre} a{" "}
          <span className="font-bold">{vuelo.aereopuerto_Destino.ciudad.nombre}</span>
        </h2>
        <p className="text-base mx-5 mt-5">Precio:</p>
        <p className={`mx-8 text-2xl font-bold ${isHovered ? "text-yellow-300" : "text-[#dd2b23]"}`}>
          ${vuelo.preciovuelo}
        </p>
        <div className="flex h-2/5 items-center justify-center ">
          <button type="button" className="mt-4 py-3 px-10 bg-yellow-300 rounded text-[#dd2b23] font-medium duration-500 hover:ease-in-out hover:scale-110">
            Comprar
          </button>
        </div>
      </article>
    </section>
  );
}
