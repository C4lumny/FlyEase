import React, { useState } from "react";
import "../../styles/PlaneSeats.css";
import { useSeatsContext } from "../../context/SeatsProvider";
import { useFetch } from "../../hooks/useFetch";

const PlaneSeats = ({ idVuelo, isReturnFlight }) => {
  const [selectedSeat, setSelectedSeat] = useState(0);
  const { crearAsiento } = useSeatsContext();

  const handleTicketChange = (index) => {
    if (selectedSeat === index) {
      setSelectedSeat(null);
    } else {
      setSelectedSeat(index);
    }
  };

  const handleClick = () => {
    if (isReturnFlight) {
      const selectedSeatData = data.asientosTotales.find((asiento) => asiento.posicion === selectedSeat);
      crearAsiento(selectedSeatData, true);
    } else {
      const selectedSeatData = data.asientosTotales.find((asiento) => asiento.posicion === selectedSeat);
      crearAsiento(selectedSeatData);
    }
  };

  const { data, loading, error } = useFetch(`/Vuelos/${idVuelo}/Avion/AsientosDisponibles`);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error al cargar los datos.</p>;
  }

  console.log(data);

  return (
    <div className="tickets">
      <div className="ticket-selector">
        <div className="head">
          <div className="title">Asientos del vuelo</div>
        </div>
        <div className="seats">
          <div className="status">
            <div className="item">Disponible</div>
            <div className="item">Ocupado</div>
            <div className="item">Seleccionado</div>
          </div>
          <div className="all-seats">
            {Array.isArray(data.asientosTotales) &&
              data.asientosTotales.map((asiento) => {
                const isBooked = data.asientosOcupados.some(
                  (asientoOcupado) => asientoOcupado.idasiento === asiento.idasiento
                );
                return (
                  <React.Fragment key={asiento.idasiento}>
                    <input
                      type="checkbox"
                      name="tickets"
                      className="input-seat"
                      id={`s${asiento.idasiento}`}
                      checked={selectedSeat === asiento.posicion}
                      onChange={() => handleTicketChange(asiento.posicion)}
                      disabled={isBooked}
                    />
                    <label htmlFor={`s${asiento.idasiento}`} className={isBooked ? "seat booked" : "seat"}></label>
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </div>
      <div className="price">
        <div className="total">
          <span>
            <span className="count">Asiento {selectedSeat}</span>
          </span>
        </div>
        <button type="button" onClick={() => handleClick()}>
          Seleccionar
        </button>
      </div>
    </div>
  );
};

export default PlaneSeats;
