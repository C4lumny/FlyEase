// // api.js
// import axios from "axios";
// import { useApiToken } from "./useApiToken";

// const usePostToApi = async (endpoint, data) => {
//   const token = useApiToken();

//   try {
//     const response = await axios.post(`https://flyeasewebapi.azurewebsites.net/FlyEaseApi${endpoint}`, data, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//         // Puedes agregar más encabezados según sea necesario
//       },
//     });

//     console.log("Respuesta:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error al realizar la solicitud POST:", error);
//     throw error;
//   }
// };

// export default usePostToApi;
