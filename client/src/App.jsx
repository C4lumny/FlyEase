import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Flights } from "./pages/Booking/FlightBooking";
import { RoundTripFlight } from "./pages/Booking/FlightBookingRt";
import { About } from "./pages/About";
import { ReservationRecord } from "./pages/ReservationRecord";
import { FlightProvider } from "./context/FlightProvider";
import { SelectedFlight } from "./context/SelectedFlight";
import { ClientProvider } from "./context/ClientProvider";
import { SeatsProvider } from "./context/SeatsProvider";
import { RoundtripFlightProvider } from "./context/RoundtripFlightProvider";
import { Client } from "./pages/Booking/Client";
import { Ticket } from "./pages/Booking/Ticket";
import { Destinations } from "./pages/Destinations";
import { ApprovedPayment } from "./pages/Booking/ApprovedPayment";
import { DeclinedPayment } from "./pages/Booking/DeclinedPayment";

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
          path="/:nombre"
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
          path="/booking/round-trip"
          element={
            <FlightProvider>
              <SelectedFlight>
                <RoundtripFlightProvider>
                  <RoundTripFlight />
                </RoundtripFlightProvider>
              </SelectedFlight>
            </FlightProvider>
          }
        ></Route>
        <Route
          path="/booking/details"
          element={
            <FlightProvider>
              <SelectedFlight>
                <RoundtripFlightProvider>
                  <ClientProvider>
                    <Client />
                  </ClientProvider>
                </RoundtripFlightProvider>
              </SelectedFlight>
            </FlightProvider>
          }
        />
        <Route
          path="/booking/details/ticket"
          element={
            <FlightProvider>
              <SelectedFlight>
                <RoundtripFlightProvider>
                  <ClientProvider>
                    <SeatsProvider>
                      <Ticket />
                    </SeatsProvider>
                  </ClientProvider>
                </RoundtripFlightProvider>
              </SelectedFlight>
            </FlightProvider>
          }
        />
        <Route
          path="/booking/details/ticket/approved"
          element={
            <FlightProvider>
              <SelectedFlight>
                <ClientProvider>
                  <SeatsProvider>
                    <ApprovedPayment />
                  </SeatsProvider>
                </ClientProvider>
              </SelectedFlight>
            </FlightProvider>
          }
        />
        <Route
          path="/booking/details/ticket/declined"
          element={
            <FlightProvider>
              <SelectedFlight>
                <ClientProvider>
                  <SeatsProvider>
                    <DeclinedPayment />
                  </SeatsProvider>
                </ClientProvider>
              </SelectedFlight>
            </FlightProvider>
          }
        />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/flightrecord/:numerodocumento" element={<ReservationRecord />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1 className="m-10 text-3xl">404 not found</h1>} />
      </Routes>
  );
}
