import { useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { TripInput } from "./TripInput";

export function SearcherForm() {
  const { data, loading, error } = useFetch("/Clientes/GetAll");
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [dateReturn, setDateReturn] = useState("");
  // Contador para saber cuando realizar la busqueda a la api
  // Atributos para validad input de fecha
  const date = new Date();
  const dateRet = new Date(dateReturn);
  dateRet.setDate(dateRet.getDate() + 1);

  const formatDate = (date) => {
    const d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
  };

  console.log(loading)

  return (
    <div>
      {loading ? (
        <div>Cargando..</div>
      ) : (
        <div className="flex py-4 gap-8">
          <label htmlFor="ida" className="flex gap-3 items-center">
            <input
              defaultChecked
              type="radio"
              name="viaje"
              id="ida"
              onChange={() => setIsRoundTrip(false)}
              className="h-4 w-4"
            />
            <p>Solo ida</p>
          </label>
          <label htmlFor="ida-vuelta" className="flex gap-3 items-center">
            <input type="radio" name="viaje" id="ida-vuelta" onChange={() => setIsRoundTrip(true)} className="h-4 w-4" />
            <p>Ida y vuelta</p>
          </label>
        </div>
      )}
      {/* Inputs */}
      <div className="flex text-black mt-5">
        {/* input origen */}
        <TripInput placeholder="Ciudad de origen" data={data} />
        {/* input destino */}
        <TripInput placeholder="Ciudad de destino" data={data}/>
        <div className="ml-10 flex">
          {/* input fecha ida */}
          <div>
            <p className="text-white mb-2 text-sm">Ida</p>
            <div className="flex relative items-center">
              <input
                className="w-48 h-10 border text-sm pl-8"
                type="date"
                placeholder="Ciudad de destino"
                min={formatDate(date)}
                onChange={(e) => setDateReturn(new Date(e.target.value))}
              />
            </div>
          </div>
          {/* input fecha vuelta */}
          <div className="">
            <p className="text-white mb-2 text-sm">Vuelta</p>
            <div className="flex relative items-center">
              <input
                className="w-48 h-10 border text-sm pl-8"
                type="date"
                placeholder="Ciudad de destino"
                min={formatDate(dateRet)}
                disabled={isRoundTrip ? false : true}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Boton comprar */}
      <button type="button" className="mt-9 mb-5 bg-red-500 py-2 px-8 rounded-3xl w-60">
        Comprar 
      </button>
    </div>
  );
}
