import { useApiToken } from "./useApiToken";

export const useInsertBoleto = () => {
    const token = useApiToken();

    const insertBoleto = (cliente, vuelo, asiento) => {
        
        const boleto = {
            descuento: 0,
            cliente: {
                numerodocumento: cliente.numerodocumento
            },
            vuelo: {
                idvuelo: vuelo.idvuelo
            },
            asiento: {
                idasiento: asiento.idasiento
            },
        };
        

        fetch("https://flyeasewebapi.azurewebsites.net/FlyEaseApi/Boletos/Post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(boleto),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return insertBoleto;
};