import React from "react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 FlyEase. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Politica de privacidad</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terminos de uso</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contactanos</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
