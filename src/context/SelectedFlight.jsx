// FlightContext.js
import { createContext, useContext, useState } from 'react';

const SelectedFlightContext = createContext();

export const useSelectedFlightContext = () => {
  return useContext(SelectedFlightContext);
};

export const SelectedFlight = ({ children }) => {
  const [SelectedflightInfo, setSelectedFlightInfo] = useState(null);

  const newSelectedFlight = (newFlightQuery) => {
    setSelectedFlightInfo(newFlightQuery);
  };

  return (
    <SelectedFlightContext.Provider value={{ SelectedflightInfo, newSelectedFlight }}>
      {children}
    </SelectedFlightContext.Provider>
  );
};
