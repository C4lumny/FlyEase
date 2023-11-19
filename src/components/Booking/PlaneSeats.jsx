import React, { useState } from "react";
import "../../styles/PlaneSeats.css";
import { useFetch } from "../../hooks/useFetch";

const TicketBooking = () => {
  const [selectedSeat, setSelectedSeat] = useState(0);

  const handleTicketChange = (index) => {
    if (selectedSeat === index) {
      setSelectedSeat(null);
    } else {
      setSelectedSeat(index);
    }
  };

  const { data, loading, error } = useFetch(`/Vuelos/${77}/Avion/AsientosDisponibles`);

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
          <div className="title">Movie Name</div>
        </div>
        <div className="seats">
          <div className="status">
            <div className="item">Available</div>
            <div className="item">Booked</div>
            <div className="item">Selected</div>
          </div>
          <div className="all-seats">
            {Array.isArray(data.asientosTotales) &&
              data.asientosTotales.map((asiento) => (
                <React.Fragment key={asiento.idasiento}>
                  <input
                    type="checkbox"
                    name="tickets"
                    id={`s${asiento.idasiento}`}
                    checked={selectedSeat === asiento.posicion}
                    onChange={() => handleTicketChange(asiento.posicion)}
                  />
                  <label htmlFor={`s${asiento.idasiento}`} className="seat"></label>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
      <div className="price">
        <div className="total">
          <span>
            <span className="count">Asiento {selectedSeat}</span>
          </span>
        </div>
        <button type="button">Book</button>
      </div>
    </div>
  );
};

export default TicketBooking;
