//Mostrar titulo del vuelo (Nombre origen + Nombre destino)
//Mostrar imagen del vuelo
//Mostrar precio

export function FlightCard({ vuelo }) {
  console.log(vuelo);

  return (
    <div className="flex items-center border border-indigo-400">
      <div className="w-1/2 h-20">
        <h2 className="text-xl">
          {vuelo.aereopuerto_Despegue.ciudad.nombre} a{" "}
          <span className="font-bold">{vuelo.aereopuerto_Destino.ciudad.nombre}</span>
        </h2>
        <p className="text-xl">{vuelo.preciovuelo}€</p>
      </div>
      <div>
        <img src={`data:image/jpeg;base64, ${vuelo.aereopuerto_Destino.ciudad.imagen}`} alt="imagen ciudad" className="h-20 w-full object-contain"/> 
      </div>
    </div>
  );
}
