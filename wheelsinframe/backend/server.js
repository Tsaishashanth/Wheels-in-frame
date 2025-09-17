const express = require("express");
const cors = require("cors");
require("dotenv").config();
const node = require ("node");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("wheels in Frame backend is running..");
});


// starting the server
app.listen(PORT, ()=> {
    console.log(`Backend running on http://localhost:&{PORT}`);
});


