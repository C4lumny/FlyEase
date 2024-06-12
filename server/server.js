const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");

app.use(express.json());
app.use(cors());

mercadopago.configure({
  access_token: "TEST-8080658544283714-112017-ed11e9efcbb3afa8073cc317b452e862-225213955",
});

app.get("/", function (req, res) {
  res.send("El servidor de mercado pago funciona correctamente");
});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "https://fly-ease.vercel.app/booking/details/ticket/approved",
      failure: "https://fly-ease.vercel.app/booking/details/ticket/declined",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
