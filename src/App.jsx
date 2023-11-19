import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Flights } from "./pages/Booking/FlightBooking";
import { About } from "./pages/About";
import { FlightProvider } from "./context/FlightProvider";
import { SelectedFlight } from "./context/SelectedFlight";
import { ClientProvider } from "./context/ClientProvider";
import { Client } from "./pages/Booking/Client";
import { Ticket } from "./pages/Booking/Ticket";
import { Destinations } from "./pages/Destinations";

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <FlightProvider>
            <Home />
          </FlightProvider>
        }
      />
      <Route
        path="/booking"
        element={
          <FlightProvider>
            <SelectedFlight>
              <Flights />
            </SelectedFlight>
          </FlightProvider>
        }
      />
      <Route
        path="/booking/details"
        element={
          <FlightProvider>
            <SelectedFlight>
              <ClientProvider>
                <Client />
              </ClientProvider>
            </SelectedFlight>
          </FlightProvider>
        }
      />
      <Route
        path="/booking/details/ticket"
        element={
          <FlightProvider>
            <SelectedFlight>
              <ClientProvider>
                <Ticket />
              </ClientProvider>
            </SelectedFlight>
          </FlightProvider>
        }
      />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h1 className="m-10 text-3xl">404 not found</h1>} />
    </Routes>
  );
}
