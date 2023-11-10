export function PromosAndPrices({ ciudad, precio, imagen, descripcion }) {
  return (
    <div className="border border-solid border-[#c7c1c1] w-[450px] cursor-pointer duration-500 hover:scale-110 hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]">
      <div className="w-full h-[225px]">
        <img src={imagen} alt="img-promo" className="w-full h-full object-cover"/>
      </div>
      <div className="mx-5 my-0">
        <h2>{ciudad}</h2>
        <p className="text-base font-normal mb-[10px]">{descripcion}</p>
        <p className="text-base font-normal mb-[10px]">{precio}</p>
      </div>
    </div>
  );
}
