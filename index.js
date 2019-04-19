require("dotenv").config();
const express = require("express");
const massive = require("massive");
const recipeCtrl = require("./recipeCtrl")


const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  }).catch(err => console.log(err));

app.use(express.json());

app.get("/api/recipes", recipeCtrl.display)
app.get("/api/recipes/:id", recipeCtrl.find)
app.post("/api/recipes", recipeCtrl.create)
app.put("/api/recipes/:id", recipeCtrl.update)
app.delete("/api/recipes:id", recipeCtrl.delete)


app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});