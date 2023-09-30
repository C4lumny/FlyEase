import { Header } from "./Header";
import { ImagesCarousel } from "./images-carousel";
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
          text={"Diego"}
          btnText={"El mas insano de la region"}
        />
      </main>
      {/* Main ends here */}

      {/* Footer ends here */}
    </>
  );
}
