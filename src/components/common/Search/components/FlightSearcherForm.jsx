import { useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import { TripInput } from "./TripInput";

export function SearcherForm() {
  const { data, loading, error } = useFetch("/Ciudades/GetAll");
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  // Atributos para validad input de fecha
  const date = new Date();

  const formatDate = (date) => {
    const d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
  };

  return (
    <div>
      {loading ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
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
              <input
                type="radio"
                name="viaje"
                id="ida-vuelta"
                onChange={() => setIsRoundTrip(true)}
                className="h-4 w-4"
              />
              <p>Ida y vuelta</p>
            </label>
          </div>
          {/* Inputs */}
          <div className="flex text-black mt-5">
            {/* input origen */}
            <TripInput placeholder="Ciudad de origen" data={data} />
            {/* input destino */}
            <TripInput placeholder="Ciudad de destino" data={data} />
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
                    onChange={(e) => {
                      const dateDepPlus1 = new Date(e.target.value);
                      dateDepPlus1.setDate(dateDepPlus1.getDate() + 1);
                      setDepartureDate(dateDepPlus1);
                    }}
                  />
                </div>
              </div>
              {/* input fecha vuelta */}
              <div className="">
                <p className="text-white mb-2 text-sm">Vuelta</p>
                <div className="relative items-center">
                  <input
                    className="w-48 h-10 border text-sm pl-8"
                    type="date"
                    placeholder="Ciudad de destino"
                    value={new Date(departureDate) > new Date(returnDate) ? formatDate(departureDate) : formatDate(returnDate)}
                    min={!departureDate ? formatDate(date) : formatDate(departureDate)}
                    onChange={(e) => {
                      const dateRetPlus1 = new Date(e.target.value);
                      dateRetPlus1.setDate(dateRetPlus1.getDate() + 1);
                      setReturnDate(dateRetPlus1)
                    }}
                    disabled={(!isRoundTrip || !departureDate) ? true : false}
                  />
                  <span className={`text-red-500 block absolute ${!isRoundTrip || departureDate ? "hidden" : ""}`}>Seleccione una fecha de ida</span>
                </div>
              </div>
            </div>
          </div>
          {/* Boton comprar */}
          <button type="button" className="mt-9 mb-5 bg-red-500 py-2 px-8 rounded-3xl w-60">
            Comprar
          </button>
        </div>
      )}
    </div>
  );
}
