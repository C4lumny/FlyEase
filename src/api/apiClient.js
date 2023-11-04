export function getDatosDesdeAPI() {
    return fetch('http://www.flyease.somee.com')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }
        return response.json();
      });
  }