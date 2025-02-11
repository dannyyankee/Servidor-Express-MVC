const express = require("express");
const app = express();
const routes = 


module.exports = router;


const routes = require("./routes/index.js")

app.use("/api", routes)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Conectado al puerto " + PORT))