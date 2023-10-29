import React, { useState } from "react";

export function Searcher() {
  const [flightType, setFlightType] = useState("Solo-ida");

  const handleFlightTypeChange = (event) => {
    setFlightType(event.target.id);
  };

  return (
    <div className="flex justify-center">
      <div className="sticky w-2/3 h-60 bg-gray-700 text-white rounded-lg -mt-24">
        <div className="m-10">
          {/* Ida y vuelta */}
          <div className="flex">
            <p className="font-bold text-3xl mr-10">Vuelos</p>
            <div className="flex gap-10 font-medium text-2xl">
              <label htmlFor="Solo-ida" className="flex items-center gap-1">
                <input
                  type="radio"
                  name="flightType"
                  id="Solo-ida"
                  checked={flightType === "Solo-ida"}
                  onChange={handleFlightTypeChange}
                />
                Solo ida
              </label>
              <label htmlFor="Ida-vuelta" className="flex items-center gap-1">
                <input
                  type="radio"
                  name="flightType"
                  id="Ida-vuelta"
                  checked={flightType === "Ida-vuelta"}
                  onChange={handleFlightTypeChange}
                />
                Ida y vuelta
              </label>
            </div>
          </div>
          {/* Searcher */}
          <div className="flex items-center h-32">
            <div className="flex gap-10">
              {flightType === "Solo-ida" && (
                <div className="flex text-center items-center gap-2">
                  <p>Desde: </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Ingrese desde dónde"
                    className="text-black h-10 px-2 rounded-lg border-2 border-gray-300"
                  />
                </div>
              )}
              {flightType === "Ida-vuelta" && (
                <div className="flex items-center text-center gap-2">
                  <p>Desde: </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Ingrese desde dónde"
                    className="text-black h-10 px-2 rounded-lg border-2 border-gray-300"
                  />
                  <p>Hacia: </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Ingrese hacia dónde"
                    className="text-black h-10 px-2 rounded-lg border-2 border-gray-300"
                  />
                </div>
              )}
              <div className="flex items-center text-center gap-2">
                <p>Fecha: </p>
                <input
                  type="date"
                  name=""
                  id=""
                  placeholder="Ingrese fecha"
                  className="text-black h-10 px-2 rounded-lg border-2 border-gray-300"
                />
              </div>
              <div className="">
                  <button className="ml-10 bg-red-500 w-36 h-10 my-button rounded-lg cursor-pointer">¡A volar!</button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
