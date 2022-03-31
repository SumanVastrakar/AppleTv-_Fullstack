const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://AppleTv:Appletv1234@appletvdata.ztlt3.mongodb.net/test");
};