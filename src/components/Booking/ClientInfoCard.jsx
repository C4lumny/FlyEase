export function ClientInfoCard({clientInfo}){
    console.log(clientInfo)

    return(
        <div className="w-[32rem] border-2 py-3 px-10 border-zinc-300 rounded-2xl">
            <div>
                <div className="text-lg font-semibold">Nombre</div>
                <div className="text-lg font-light">{clientInfo.nombres} {clientInfo.apellidos}</div>
            </div>
        </div>
    );
}