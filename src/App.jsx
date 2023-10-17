import { Header } from "./components/Header";
import { ImagesCarousel } from "./components/images-carousel";
import { Searcher } from "./components/flights-searcher";
import "./App.css";


export function App() {
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
          
      </main>
      {/* Main ends here */}

      {/* Footer ends here */}
    </>
  );
}
