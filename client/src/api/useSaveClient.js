import { useApiToken } from "./useApiToken";

export const useSaveClient = () => {
  const token = useApiToken();

  const saveClient = (client) => {
    try {
      fetch("https://flyeasewebapi.azurewebsites.net/FlyEaseApi/Clientes/Post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          numerodocumento: client.numerodocumento,
          tipodocumento: client.tipodocumento,
          nombres: client.nombres,
          apellidos: client.apellidos,
          celular: client.celular,
          correo: client.correo,
          fecharegistro: client.fecharegistro,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Cliente creado satisfactoriamente: ", data.response));
    } catch (error) {
      console.error("Error al realizar la solicitud POST:", error);
      // Puedes manejar el error aquí
      throw error; // Puedes relanzar el error o manejarlo según tus necesidades
    }
  };

  return { saveClient };
};
