import { Header } from "../common/Header";
import { Footer } from "../common/Footer-flyease";
import { useFetch } from "../../hooks/useFetch";
import { FlightCard } from "../common/FlightCard";

export function Flights() {
  const { data, error, loading } = useFetch("/Vuelos/GetAll");

  return (
    <>
      <Header />
      <main>
        <h1 className="">Vuelos disponibles</h1>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Ha ocurrido un error: {error}</p>
        ) : (
          <div>
            {data?.map((vuelo) => (
              <FlightCard key={vuelo.idvuelo} vuelo={vuelo} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
