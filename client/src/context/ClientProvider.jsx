import { createContext, useContext, useState } from 'react';

const ClientContext = createContext();

export const useClientContext = () => {
    return useContext(ClientContext);
}

export const ClientProvider = ({ children}) => {
    const [clientInfo, setClientInfo] = useState(null);

    const crearCliente = (newClientQuery) => {
        setClientInfo(newClientQuery);
    };

    return (
        <ClientContext.Provider value={{ clientInfo, crearCliente }}>
            {children}
        </ClientContext.Provider>
    );
}