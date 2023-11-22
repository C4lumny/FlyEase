import { Header } from "../components/Header";
import { TravelSearcher } from "../components/Search/TravelSearcher";
import { PromosAndPrices } from "../components/Promos-and-prices";
import { Footer } from "../components/Footer-flyease";
import { GetCheapestFlights } from "../utils/getCheapestFlights";
import { Loader } from "./Loader";
import Imagen from "../assets/mujer-en-la-playa.jpg";

export function Home() {
  const { flights, loading } = GetCheapestFlights();
  console.log(flights);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          {/* Header ends here  */}
          <main>
            <div className="relative flex justify-center items-center">
              <div className="relative w-full h-4/5 shadow-[0_8px_6px_-6px_black]">
                <img src={Imagen} alt="img-banner" className=" object-fill brightness-[70%]" />
                <div className="absolute inset-0 flex justify-center items-start top-[5%] pt-10 z-0">
                  <p className="text-white text-4xl font-bold">EXPLORA, SUEÑA, DESCUBRE</p>
                </div>
                <div className="absolute inset-0 flex justify-center items-center top-[15%] z-10">
                  <TravelSearcher />
                </div>
              </div>
            </div>
            {/* Promos */}
            <h1 className="mt-[100px] mb-[60px] text-center font-medium text-4xl">
              ¡Tu destino favorito a precios imperdibles!
            </h1>
            <div className="flex justify-center items-center gap-24 mt-14 mb-24 flex-wrap">
              {flights.map((flight) => (
                <PromosAndPrices key={flight.idvuelo} vuelo={flight} />
              ))}
            </div>
          </main>
          {/* Main ends here */}
          <Footer />
          {/* Footer ends here */}
        </>
      )}
    </>
  );
}
