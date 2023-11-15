import planeIcon from "../../assets/plane.svg";

export function FlightCard() {
  return (
    <div className="mx-48">
      <div className="flex p-10 border rounded-3xl gap-10 shadow-2xl">
        <div>
          <p>06:14</p>
          <p>Bog</p>
        </div>
        <div className="h-5">
          <img src={planeIcon} alt="" className="h-full" />
        </div>
        <div>
          <p>07:47</p>
          <p>Vup</p>
        </div>
        <div>
            <p className="text-zinc-500">Precio:</p>
            <div>
                COP <span className="text-2xl font-semibold">215.910</span>
            </div>
        </div>
      </div>
    </div>
  );
}
