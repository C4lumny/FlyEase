import { Footer } from "../components/Footer-flyease";
import { Header } from "../components/Header";
import { useFetch } from "../hooks/useFetch";
import { FlightCard } from "../components/FlightCard";
import { Loader } from "./Loader";

export function Flights() {
  const { data, error, loading } = useFetch("/Vuelos/GetAllAvailable");

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Ha ocurrido un error: {error}</p>
      ) : (
        <>
          <Header />
          <main className="bg-[#F3F2F2] py-10">
            <div className="flex justify-center gap-10 my-5 mx-52 px-0 py-20 flex-wrap bg-white rounded-xl shadow-xl">
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
