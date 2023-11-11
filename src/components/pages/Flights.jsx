import { Footer } from "../common/Footer-flyease";
import { Header } from "../common/Header";
import { useFetch } from "../../hooks/useFetch";
import { FlightCard } from "../common/FlightCard";
import { Loader } from "./Loader";

export function Flights() {
  const { data, error, loading } = useFetch("/Vuelos/GetAll");

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Ha ocurrido un error: {error}</p>
      ) : (
        <>
          <Header />
          <main>
            <h1 className="">Vuelos disponibles</h1>
            <div className="flex justify-center gap-10 my-10 flex-wrap">
              {data?.map((vuelo) => (
                <FlightCard key={vuelo.idvuelo} vuelo={vuelo} />
              ))}
            </div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
