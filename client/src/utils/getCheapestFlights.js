import { useFetch } from "../hooks/useFetch"
import { useEffect, useState } from "react";

export const GetCheapestFlights = () => {
    const { data, loading } = useFetch('/Vuelos/GetAllAvailable')
    const [flights, setFlights] = useState([])

    useEffect(() => {
        if (!loading && data) {
          // Ordenar los vuelos por precio en orden ascendente
          const sortedFlights = data.sort((a, b) => a.preciovuelo - b.preciovuelo);
      
          // Seleccionar los primeros tres vuelos
          const cheapestFlights = sortedFlights.slice(0, 3);
      
          // Hacer algo con los vuelos más baratos...
          setFlights(cheapestFlights);
        }
      }, [loading, data]);

      return { flights, loading };
}