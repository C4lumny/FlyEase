export function ImagesCarousel({source, text, btnText}) {
  return (
    <div className="relative flex justify-center items-center">
      <div className="w-full h-1/2 shadow-[0_0_15px_4px_rgba(0,0,0,0.5)]">
        <img src={source} alt="img-banner" className="w-full max-w-max object-fill brightness-[70%]"/>
      </div>
      <p className="absolute top-[40%] left-56 text-white text-4xl font-bold">{text}</p>
      <button className="absolute top-[48%] left-[225px] text-white bg-[#ff3e41] text-lg font-bold border-none py-2.5 px-5 rounded-md cursor-pointer">{btnText}</button>
    </div>
  );
}