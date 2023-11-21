export function ClientInfoCard({ clientInfo, selectedSeat }) {
  console.log(clientInfo);
  console.log(selectedSeat);

  return (
    <div className="w-[40rem] border-2 py-3 px-10 shadow-[-1px_1px_34px_-6px_rgba(0,0,0,0.16);] bg-white rounded-2xl grid grid-cols-[2fr,1fr]">
      <div>
        <div className="text-lg font-semibold">Nombre</div>
        <div className="text-lg font-light">
          {clientInfo.nombres} {clientInfo.apellidos} - {clientInfo.numerodocumento}
        </div>
      </div>
      <div>
        <div className="font-semibold text-lg">Asiento:</div>
        <div className="text-lg font-light">{selectedSeat}</div>
      </div>
    </div>
  );
}
