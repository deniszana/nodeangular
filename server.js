const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



//if (process.env.PROD) {
  app.use(express.static(path.join(__dirname,"./dist/nodeangular")));
  app.get("*",(req,res) => {
    res.sendFile("index.html", {root: "dist/odeangular/"})
  });
//}

// server
const PORT = process.env.PORT || 8080;
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${PORT}`);
  })



app.listen(PORT);