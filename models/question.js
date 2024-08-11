const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    
    question :{
        type : String,
        required : true,
        default :"",
        set : (v)=> v === "" ?"hi":v,

    },
    options :{ 
        type : Array,
        required : true,
        default :"",
        set : (v)=> v === "" ? "hi":v,

    },
    answer :{ 
        type : String,
        required : true,
        default :"",
        set : (v)=> v === "" ? "hi":v,


    },
});

const Questions = mongoose.model("Questions", questionSchema);
module.exports = Questions;