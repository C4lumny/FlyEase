import { createContext, useContext, useState } from 'react';

const SeatsContext = createContext();

export const useSeatsContext = () => {
    return useContext(SeatsContext);
}

export const SeatsProvider = ({ children}) => {
    const [selectedSeat, setSelectedSeat] = useState(null);

    const crearAsiento = (newClientQuery) => {
        setSelectedSeat(newClientQuery);
    };

    return (
        <SeatsContext.Provider value={{ selectedSeat, crearAsiento }}>
            {children}
        </SeatsContext.Provider>
    );
}