const app = require("./index.js")
const connect = require("./configs/db")
app.listen (5000, async function(){
    await connect ();
    console.log("Listening on port 5000");
})