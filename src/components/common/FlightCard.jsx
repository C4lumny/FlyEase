//Mostrar titulo del vuelo (Nombre origen + Nombre destino)
//Mostrar imagen del vuelo
//Mostrar precio

export function FlightCard({ vuelo }) {
  console.log(vuelo);

  return (
    <div className="w-2/5 h-40 flex border border-gray-300">
      <div className="w-1/2">
        <img className="h-40 brightness-75 w-full object-cover" src={`data:image/jpeg;base64, ${vuelo.aereopuerto_Destino.ciudad.imagen}`} alt="imagen ciudad" /> 
      </div>
      <div className="w-1/2 h-20">
        <h2 className="text-base mx-5 mt-5 text-gray-500">
          {vuelo.aereopuerto_Despegue.ciudad.nombre} a{" "}
          <span className="font-bold">{vuelo.aereopuerto_Destino.ciudad.nombre}</span>
        </h2>
        <p className="text-base mx-5 mt-5">Precio:</p> 
        <p className="mx-8 text-2xl font-bold text-[#dd2b23]">${vuelo.preciovuelo}<span className="text-base font-normal text-gray-500">COP</span></p>
      </div>
      
    </div>
  );
}
