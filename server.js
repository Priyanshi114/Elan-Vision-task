const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose"); 

const MONGO_URL = "mongodb://127.0.0.1:27017/elan&vision";

main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL); 
};

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
   res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register"); 
});

app.post("/register", (req, res) => {
    let {name, email, year, number, department} = req.body;
    console.log("New Registration:", name, email, year, number, department);
    res.render("success", { name });
});

app.listen(port, () => {
    console.log("server is listening");
});