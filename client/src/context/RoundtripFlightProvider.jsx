// FlightContext.js
import { createContext, useContext, useState } from 'react';

const RoundtripFlightContext = createContext();

export const useRoundtripFlightContext = () => {
  return useContext(RoundtripFlightContext);
};

export const RoundtripFlightProvider = ({ children }) => {
  const [RoundtripflightInfo, setRoundtripFlightInfo] = useState(null);

  const crearVueloRetorno = (newFlightQuery) => {
    setRoundtripFlightInfo(newFlightQuery);
  };

  return (
    <RoundtripFlightContext.Provider value={{ RoundtripflightInfo, crearVueloRetorno }}>
      {children}
    </RoundtripFlightContext.Provider>
  );
};
