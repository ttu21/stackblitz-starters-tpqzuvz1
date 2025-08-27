const express = require("express");
const app = express();

// ⚡ Liste des jeux ou créateurs autorisés
const allowedPlaces = ["1234567890"];
const allowedCreators = ["11223344"];

app.get("/check", (req, res) => {
  const placeId = String(req.query.placeId || "");
  const creatorId = String(req.query.creatorId || "");

  const authorized =
    allowedPlaces.includes(placeId) || allowedCreators.includes(creatorId);

  res.json({ authorized });
});

app.listen(3000, () => console.log("API running on port 3000"));


