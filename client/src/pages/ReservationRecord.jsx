import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer-flyease.jsx";
import { useFetch } from "../hooks/useFetch";
import { Loader } from "./Loader.jsx";
import { useParams } from "react-router-dom";
import "../styles/table.css";

export function ReservationRecord() {
  const { numerodocumento } = useParams();
  const { data, loading, error } = useFetch(`/Clientes/GetById/${numerodocumento}/Boletos`);
  const dataClient = useFetch(`/Clientes/GetById/${numerodocumento}`);
  const dataClientResponse = dataClient.data;

  console.log(dataClientResponse);
  console.log(data);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>Ha ocurrido un error: {error}</p>
      ) : !data || !dataClientResponse ? (
        <div className="flex flex-col w-full h-screen">
          <Header />
          <div className="m-20">
            <h1 className="text-4xl font-bold">Usuario no encontrado</h1>
            <p className="text-lg font-semibold text-zinc-700">
              No se encontraron parámetros con los criterios establecidos
            </p>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="flex flex-col w-full h-screen">
          <Header />
          <div className="w-full max-w-7xl mx-auto">
            <div className="my-10">
              <h1 className="text-3xl font-semibold">
                Bienvenido, {dataClientResponse.nombres} {dataClientResponse.apellidos}
              </h1>
              <h2 className="text-xl font-normal mt-5 mb-10">Historial de boletos</h2>
              <div className="table-wrapper">
                <table className="fl-table">
                  <thead>
                    <tr>
                      <th>Boleto ID</th>
                      <th>Vuelo ID</th>
                      <th>Aeropuerto de salida</th>
                      <th>Aeropuerto de llegada</th>
                      <th>Asiento</th>
                      <th>Categoria</th>
                      <th>Fecha salida</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.idboleto}</td>
                        <td>{item.vuelo.idvuelo}</td>
                        <td>{item.vuelo.aeropuerto_Despegue.nombre}</td>
                        <td>{item.vuelo.aeropuerto_Destino.nombre}</td>
                        <td>{item.asiento.posicion}</td>
                        <td>{item.asiento.categoria.nombre}</td>
                        <td>
                          {new Date(item.vuelo.fechayhoradesalida).toLocaleString("es-ES", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td>${item.preciototal.toLocaleString("es-ES")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
