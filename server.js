let express    = require("express");
let app        = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

app.use(express.static(__dirname + "/client/static"));
app.use(bodyParser.json());
app.use(express.json());
app.listen(8000,()=>{
	console.log("Server Running");
});

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);