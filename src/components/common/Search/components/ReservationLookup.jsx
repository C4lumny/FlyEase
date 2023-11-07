import hash from "../../../../assets/hash.svg";

export function Lookup() {
  return (
    <div className="py-6 px-6">
      <h1 className="text-2xl mb-4">Consulte el estado de su vuelo</h1>
      <div className="flex relative items-center mt-6">
        <img src={hash} alt="" className="absolute h-4 w-4 left-3" />
        <input
          type="text"
          name=""
          id=""
          className="text-black w-64 h-10 border text-sm pl-8"
          placeholder="Ingrese su codigo de vuelo"
        />
        <button type="button" className="mx-6 bg-red-500 py-2 px-8 rounded-3xl w-30">
          Buscar
        </button>
      </div>
    </div>
  );
}
