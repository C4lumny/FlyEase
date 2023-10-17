import React from "react";

export function PromosAndPrices({ ciudad, precio, imagen, descripcion }) {
  return (
    <div className="promos-container">
      <div className="img-circle-promo-container">
        <img src={imagen} alt="img-promo" />
      </div>
      <div className="promos-container-text">
        <h2>{ciudad}</h2>
        <p>{descripcion}</p>
        <p>{precio}</p>
      </div>
    </div>
  );
}
