import { useEffect, useState } from "react";

export function useApiToken() {
  const [token, setToken] = useState(null);
  const id =
    "c30d0407030207885b4f9d804d3d7dd23b0119973cc23815e533e67cb774ef6cd5dd9e4d3aee7fd67ee7a1cd1b1d0bc67a49f82ce120dd6dd7b895f7c7701c2d513067502274296ef5c91ff9";

  useEffect(() => {
    fetch(`https://flyeasewebapi.azurewebsites.net/FlyEaseApi/ApplicationTokens/GenerateAppsToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientid: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        console.log(data.token)
      })
      .catch((error) => {
        console.error("Error fetching token:", error);
      });
  }, []);

  return token;
}
