const express = require("express");
const app = express();

// ⚡ Liste des jeux ou créateurs autorisés
const allowedPlaces = ["8454717431"];
const allowedCreators = ["1359682582"];

app.get("/check", (req, res) => {
  const placeId = String(req.query.placeId || "");
  const creatorId = String(req.query.creatorId || "");

  const authorized =
    allowedPlaces.includes(placeId) || allowedCreators.includes(creatorId);

  res.json({ authorized });
});

app.listen(3000, () => console.log("API running on port 3000"));



