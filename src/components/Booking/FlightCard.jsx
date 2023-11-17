import planeIcon from "../../assets/plane.svg";

export function FlightCard(vuelo) {
  console.log(vuelo.vuelo);

  const vueloInfo = vuelo.vuelo;
  const fechaSalida = new Date(vueloInfo.fechayhoradesalida);
  const fechaLlegada = new Date(vueloInfo.fechayhorallegada);

  return (
    <div className="mx-48">
      <div className="flex h-32 border rounded-3xl shadow-lg bg-white cursor-pointer">
        <div className="flex py-5 px-10 gap-10 w-9/12">
          <div className="flex items-center justify-between w-9/12">
            <div>
              <p className="text-4xl font-semibold">
                {fechaSalida.getHours().toString().padStart(2, "0")}:
                {fechaSalida.getMinutes().toString().padStart(2, "0")}
              </p>
              <p className="font-semibold">BOG</p>
            </div>
            <div className="h-5">
              <img src={planeIcon} alt="" className="h-full" />
            </div>
            <div>
              <p className="text-4xl font-semibold">
                {fechaLlegada.getHours().toString().padStart(2, "0")}:
                {fechaLlegada.getMinutes().toString().padStart(2, "0")}
              </p>
              <p className="font-semibold">VUP</p>
            </div>
          </div>
          <div className="w-3/12">
            <p className="text-zinc-500">Precio:</p>
            <div>
              COP <span className="text-4xl font-semibold">{vueloInfo.preciovuelo.toLocaleString("es-ES")}</span>
            </div>
          </div>
        </div>
        {/* Imagen */}
        <div className="w-3/12 overflow-hidden relative transform">
          <img
            src={`data:image/jpeg;base64,${vueloInfo.aeropuerto_Destino.ciudad.imagen}`}
            alt=""
            className="h-full w-full object-cover rounded-2xl hover:rotate-180"
          />
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-[rgba(255,255,255,0.1)] to-transparent"></span>{" "}
        </div>
      </div>
    </div>
  );
}
