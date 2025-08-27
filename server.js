const express = require("express");
const app = express();

// Jeux ou créateurs autorisés
const allowedPlaces = ["1234567890"];  // Mets ici le PlaceId du jeu
const allowedCreators = ["11223344"];  // Mets ici le CreatorId du créateur

app.get("/check", (req, res) => {
  const placeId = String(req.query.placeId || "");
  const creatorId = String(req.query.creatorId || "");

  const authorized =
    allowedPlaces.includes(placeId) || allowedCreators.includes(creatorId);

  res.json({ authorized });
});

app.listen(3000, () => console.log("API running on port 3000"));
