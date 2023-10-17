import React, { useState } from "react";

export function Searcher() {
  const [flightType, setFlightType] = useState("solo-ida");

  function handleFlightTypeChange(event) {
    setFlightType(event.target.value);
  }

  return (
    <div className="fe-searcher-container">
      <div className="fe-searcher-container-top">
        <div className="container-flightValidation">
          <label htmlFor="solo-ida">
            <input
              type="radio"
              name="flight-type"
              value="solo-ida"
              checked={flightType === "solo-ida"}
              onChange={handleFlightTypeChange}
            />
            Solo ida
          </label>
          <label htmlFor="ida-vuelta">
            <input
              type="radio"
              name="flight-type"
              value="ida-vuelta"
              checked={flightType === "ida-vuelta"}
              onChange={handleFlightTypeChange}
            />
            Ida y vuelta
          </label>
        </div>
      </div>
      <div className="fe-searcher-container-bot">
        <div class="flights-searcher-input">
          <label for="from-input">Desde:</label>
          <input
            type="text"
            id="from-input"
            name="from"
            placeholder="Enter origin city or airport"
            required
          />
        </div>
        <div class="flights-searcher-input">
          <label for="to-input">Hacia:</label>
          <input
            type="text"
            id="to-input"
            name="to"
            placeholder="Enter destination city or airport"
            required
          />
        </div>
        <div class="flights-searcher-input">
          <label for="passengers-select">Pasajeros:</label>
          <select id="passengers-select" name="passengers" required>
            <option value="1">1 passenger</option>
            <option value="2">2 passengers</option>
            <option value="3">3 passengers</option>
            <option value="4">4 passengers</option>
            <option value="5">5 passengers</option>
          </select>
        </div>
        <div class="flights-searcher-input">
          <button type="submit">¡A volar!</button>
        </div>
      </div>
    </div>
  );
}
