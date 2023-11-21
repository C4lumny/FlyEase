// FlightContext.js
import { createContext, useContext, useState } from 'react';

const FlightContext = createContext();

export const useFlightContext = () => {
  return useContext(FlightContext);
};

export const FlightProvider = ({ children }) => {
  const [flightInfo, setFlightInfo] = useState(null);

  const buscarVuelos = (newFlightQuery) => {
    setFlightInfo(newFlightQuery);
  };

  return (
    <FlightContext.Provider value={{ flightInfo, buscarVuelos }}>
      {children}
    </FlightContext.Provider>
  );
};
