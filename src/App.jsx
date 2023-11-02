import { Header } from "./components/Header";
import { ImagesCarousel } from "./components/images-carousel";
import { Searcher } from "./components/flights-searcher";
import { PromosAndPrices } from "./components/promos-and-prices";
import { Footer } from "./components/Footer-flyease";
import { fetchData } from "./api/fetchData";
import { Suspense } from "react";

export function App() {
  const apiData = fetchData("http://www.flyease.somee.com/Clientes/GetAll");
  console.log(apiData);
  return (
    <>
      <Header />
      {/* Header ends here  */}
      <main>
        <ImagesCarousel
          source={
            "https://www.avianca.com/content/dam/avianca_new/contenido/nuevas-rutas-ecuador-julio2023/viajes-a-cancun-mujer-en-la-playa.jpg?lazy=true"
          }
          text={"EXPLORA, SUEÑA, DESCUBRE"}
          btnText={"¡Conoce más!"}
        />

        <Searcher />
        {/* Promos */}
        <h1 className="mt-[100px] mb-[60px] text-center font-medium text-4xl">
          ¡Tu destino favorito a precios imperdibles!
        </h1>
        <div className="flex justify-center items-center gap-24 mt-14 mb-24 flex-wrap">
          <PromosAndPrices
            ciudad={"Bogota"}
            descripcion={"La capital de Colombia"}
            imagen={
              "https://elcomercio.pe/resizer/ArFQdIs0LVTdkFUwDBUDhv0N0ac=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZTXMI7A35ZDEBA4CXDUGH4BAAE.jpg"
            }
            precio={"150.000$ COP"}
          />
          <PromosAndPrices
            ciudad={"Valledupar"}
            descripcion={"Capital mundial del vallenato"}
            imagen={
              "https://www.ghlhoteles.com/uploads/cms_apps/imagenes/Valledupar.jpg"
            }
            precio={"10.000$ COP"}
          />
          <PromosAndPrices
            ciudad={"Bucaramanga"}
            descripcion={"La ciudad bonita"}
            imagen={
              "https://upload.wikimedia.org/wikipedia/commons/5/54/Bucaramanga_v_cu.JPG"
            }
            precio={"1.000.000$ COP"}
          />
        </div>
      </main>
      {/* Main ends here */}
      <Footer />
      {/* Footer ends here */}
    </>
  );
}
