import { Header } from "../components/Header";
import { Footer } from "../components/Footer-flyease";
import { DestinationCard } from "../components/DestinationCard";
import { useFetch } from "../hooks/useFetch";
import { Loader } from "./Loader";
import React from "react";

export function Destinations() {
  const { data, loading, error } = useFetch("/Ciudades/GetAll");

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Un error ha ocurrido</p>
      ) : (
        <div className="w-full h-screen flex flex-col">
          <Header />
          <div className="flex flex-col items-center mt-20 w-full">
            <h1 className="text-xl font-semibold">Descubre los mejores lugares para visitar</h1>
            <div className="max-w-7xl mx-auto w-full flex flex-wrap my-10 gap-10">
              {data.map((ciudad) => (
                <React.Fragment key={ciudad.id}>
                  <DestinationCard ciudad={ciudad} />
                </React.Fragment>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
