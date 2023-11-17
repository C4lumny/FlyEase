import { Header } from "../components/Header";
import { Footer } from "../components/Footer-flyease";
import { TeamCard } from "../components/TeamCard";
import plane from "../assets/gif-plane.gif";

export function About() {
  return (
    <>
      <Header />
      <main>
        {/* Explicando FlyEase */}
        <div className=" p-7 w-full flex bg-white">
          <div className="ml-12 my-12 w-1/2">
            <h1 className="text-3xl font-medium">¿Qué es FlyEase?</h1>
            <p className="mt-2">
              En un mundo cada vez más conectado y en constante movimiento, la planificación y adquisición de vuelos se
              han convertido en una tarea esencial, tanto para las aerolíneas que ofrecen servicios de transporte aéreo
              como para las agencias de viajes que conectan a los viajeros con sus destinos deseados. Sin embargo, a
              medida que el sector de la aviación crece y evoluciona, el proceso de compra de boletos de vuelo se ha
              vuelto más complejo y, en ocasiones, abrumador. Este proyecto tiene como objetivo abordar y mejorar
              eficazmente el problema inherente a la coordinación y administración de la compra de boletos de vuelo,
              brindando una solución simplificada. Nuestra aplicación está diseñada para satisfacer las necesidades de
              diversos actores, incluyendo aerolíneas, agencias de viajes y viajeros individuales, proporcionando una
              plataforma que simplificará la experiencia de búsqueda, selección y compra, así como como la gestión de
              estos
            </p>
          </div>
          <div className="flex justify-center items-center w-1/2">
            <img src={plane} alt="avion volando" className="w-4/5" />
          </div>
        </div>
        {/* Equipo */}
        <div className="mb-12 bg-white">
          <div className="flex justify-center">
            <h1 className="text-3xl font-semibold">Integrantes</h1>
          </div>
          <div className="flex justify-center gap-16 my-16 flex-wrap">
            <TeamCard
              nombre={"Nathan"}
              cargo={"Dev Frontend"}
              imagen={"https://unavatar.io/C4lumny"}
              github={"https://github.com/C4lumny"}
            />
            <TeamCard
              nombre={"Diego"}
              cargo={"Dev Backend"}
              imagen={"https://unavatar.io/castrodiegoa"}
              github={"https://github.com/castrodiegoa"}
            />
            <TeamCard
              nombre={"Aisaac"}
              cargo={"Dev Backend"}
              imagen={"https://unavatar.io/Aisaac123"}
              github={"https://github.com/Aisaac123"}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
