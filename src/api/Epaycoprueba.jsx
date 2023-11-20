export default function EpaycoPrueba() {
    var handler = window.ePayco.checkout.configure({
        key: '45b960805ced5c27ce34b1600b4b9f54',
        test: true
    });
    var data={
        //Parametros compra (obligatorio)
        name: "Vestido Mujer Primavera",
        description: "Vestido Mujer Primavera",
        invoice: "12333322223",
        currency: "cop",
        amount: "12000",
        tax_base: "0",
        tax: "0",
        country: "co",
        lang: "es",

        //Onpage="false" - Standard="true"
        external: "false",

        //Atributos opcionales
        extra1: "extra1",
        extra2: "extra2",
        extra3: "extra3",
        // confirmation: "http://secure2.payco.co/confirmation.php",
        //response: "http://secure2.payco.co/response.php",

        //Atributos cliente
        name_billing: "Andres Perez",
        address_billing: "Carrera 19 numero 14 91",
        type_doc_billing: "cc",
        mobilephone_billing: "3050000000",
        number_doc_billing: "100000000"
    };
  
    return (
      <div className="App">
        <button onClick={() => handler.open(data)}>open checkout</button>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
  