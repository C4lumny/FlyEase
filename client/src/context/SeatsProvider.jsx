import { createContext, useContext, useState } from 'react';

const SeatsContext = createContext();

export const useSeatsContext = () => {
    return useContext(SeatsContext);
}

export const SeatsProvider = ({ children}) => {
    const [selectedSeatDeparture, setSelectedSeatDeparture] = useState(null);
    const [selectedSeatReturn, setSelectedSeatReturn] = useState(null);

    const crearAsiento = (newClientQuery, isReturnFlight) => {
        if (isReturnFlight) {
            setSelectedSeatReturn(newClientQuery);
        } else {
            setSelectedSeatDeparture(newClientQuery);
        }
    };

    return (
        <SeatsContext.Provider value={{ selectedSeatDeparture, selectedSeatReturn, crearAsiento }}>
            {children}
        </SeatsContext.Provider>
    );
}