let express = require("express");
let express = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoder({ extended: true}));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});
