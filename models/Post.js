const mng= require("mongoose");

const PostSchema = mng.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    date: {type:Date, default:Date.now},
});

module.exports = mng.model("PostTable",PostSchema);