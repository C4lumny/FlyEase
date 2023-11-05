import { Header } from "../common/Header";
import { Footer } from "../common/Footer-flyease";
import { useFetch } from "../../hooks/useFetch";
import { FlightCard } from "../common/FlightCard";

export function Flights() {
  const apiData = useFetch("/Boletos/GetAll")
  console.log(apiData);
  
  return (
    <>
      <Header />
      <main>
        <h1>Vuelos disponibles</h1>
        <FlightCard />
      </main>
      <Footer />
    </>
  );
}
