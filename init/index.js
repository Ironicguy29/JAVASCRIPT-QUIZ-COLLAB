const mongoose = require("mongoose");
const initData = require("./data.js");
const Questions = require("../models/question.js");

const MONGO_URL = ("mongodb://127.0.0.1:27017/quiz");

main()
   .then(()=>{
    console.log("connected to DB");
   })
   .catch((err)=>{
    console.log(err);
   });

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
    await Questions.deleteMany({});
    await Questions.insertMany(initData.data);
    console.log("date was initialized");
};

initDB();

