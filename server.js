require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose"); 

const MONGO_URL = process.env.MONGO_URL;
console.log("MONGO_URL:", process.env.MONGO_URL);

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("connected to db");
}

main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
});

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