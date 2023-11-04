import { Header } from "../common/Header";
import { ImagesCarousel } from "../common/Images-carousel";
import { Searcher } from "../common/Flights-searcher";
import { PromosAndPrices } from "../common/Promos-and-prices";
import { Footer } from "../common/Footer-flyease";
import { useFetch } from "../../hooks/useFetch";
import Imagen from "../../assets/mujer-en-la-playa.jpg";

export function Home() {
    const apiData = useFetch("http://www.flyease.somee.com/FlyEaseApi/Clientes/GetAll");
    console.log(apiData);
  
    return (
    <>
      <Header />
      {/* Header ends here  */}
      <main>
        <ImagesCarousel
          source={
            Imagen
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
