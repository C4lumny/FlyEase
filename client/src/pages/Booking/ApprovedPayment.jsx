import successIcon from "../../assets/successIcon.png";
import { Link } from "react-router-dom";
import html2pdf from "html2pdf.js";
import { useEffect } from "react";
//Imports de funciones
import { useInsertBoleto } from "../../api/useInsertBoleto.js";
import { useSaveClient } from "../../api/useSaveClient.js";
import { useFetch } from "../../hooks/useFetch.js";

export function ApprovedPayment() {
  const { saveClient } = useSaveClient();
  const insertBoleto = useInsertBoleto();
  //SessionStorage para persistir la informacion en caso de una actualizacion
  const clientInfo = JSON.parse(sessionStorage.getItem("cliente"));
  const SelectedflightInfo = JSON.parse(sessionStorage.getItem("vuelo"));
  const SelectedReturnFlightInfo = JSON.parse(sessionStorage.getItem("vueloVuelta"));
  const selectedSeatDeparture = JSON.parse(sessionStorage.getItem("asientoIda"));
  const selectedSeatReturn = JSON.parse(sessionStorage.getItem("asientoRetorno"));
  const clientId = useFetch(`/FlyEaseApi/Clientes/GetById/${clientInfo.numerodocumento}`);
  let precioTotal = 0;

  if (!SelectedReturnFlightInfo) {
    precioTotal = SelectedflightInfo.preciovuelo;
  } else {
    precioTotal = SelectedflightInfo.preciovuelo + SelectedReturnFlightInfo.preciovuelo;
  }

  console.log(clientId);

  //Creacion del boleto si la transaccion es aprobada
  useEffect(() => {
    if (clientId.numerodocumento !== clientInfo.numerodocumento) {
      // El cliente es nuevo
      saveClient(clientInfo);
    }
    if (selectedSeatReturn) {
      // El cliente ha seleccionado un asiento de regreso
      insertBoleto(clientInfo, SelectedflightInfo, selectedSeatDeparture);
      insertBoleto(clientInfo, SelectedReturnFlightInfo, selectedSeatReturn);
    } else {
      // El cliente no ha seleccionado un asiento de regreso
      insertBoleto(clientInfo, SelectedflightInfo, selectedSeatDeparture);
    }
  }, [
    clientInfo,
    SelectedflightInfo,
    selectedSeatDeparture,
    selectedSeatReturn,
    insertBoleto,
    saveClient,
    SelectedReturnFlightInfo,
    clientId.numerodocumento,
  ]);

  // Obtén la URL actual
  var url = window.location.href;
  var urlObj = new URL(url);
  var paymentId = urlObj.searchParams.get("payment_id");
  var status = urlObj.searchParams.get("status");
  var paymentType = urlObj.searchParams.get("payment_type");
  var transactionDate = new Date();

  const generarPDF = () => {
    // Obtén el contenido del recibo como un elemento HTML
    const reciboElement = document.getElementById("recibo");

    // Configuración para la generación del PDF
    const opcionesPDF = {
      margin: 10,
      filename: "recibo.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Genera el PDF
    html2pdf().from(reciboElement).set(opcionesPDF).save();
  };

  return (
    <div className="bg-[#beeabe] w-full h-screen flex flex-col justify-center items-center">
      <div
        id="recibo"
        className="ticket-card bg-white 2xl:w-[25%] h-[60%] rounded-2xl shadow-md flex flex-col items-center py-5 px-5 2xl:h-[80%] lg:h-[90%] lg:w-[30%] md:w-[40%] md:h-screen"
      >
        <div className="p-5 bg-green-100 rounded-full">
          <img src={successIcon} alt="" className="w-10 h-10" />
        </div>
        <div className="mt-5 font-normal">Transacción Aprobada!</div>
        <div className="my-5 font-bold text-2xl">COP ${precioTotal}</div>
        <span className="border-b border-zinc-400 w-[80%] mt-5"></span>
        <div className="w-[80%]">
          <div className="flex justify-between mt-5">
            <div className="font-light">ID de pago</div>
            <div className="font-semibold">{paymentId}</div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="font-light">Estado</div>
            <div className="font-semibold">{status}</div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="font-light">Tipo de pago</div>
            <div className="font-semibold">{paymentType}</div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="font-light">Fecha de pago</div>
            <div className="font-semibold">{transactionDate.toLocaleString()}</div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="font-light">Cliente</div>
            <div className="font-semibold">
              {clientInfo.nombres} {clientInfo.apellidos}
            </div>
          </div>
        </div>
        <button className="mt-6 py-3 px-10 border border-zinc-700 rounded-2xl" onClick={() => generarPDF()}>
          Generar recibo PDF
        </button>
      </div>
      <Link to={"/"}>
        <button className="mt-10 px-14 py-3 rounded-2xl bg-zinc-700 text-white">Volver a FlyEase</button>
      </Link>
    </div>
  );
}
