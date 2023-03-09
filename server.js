require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const NoteRoute = require("./routes/noteroute")
const UserRoute = require('./routes/userroute')

const db = require("./database/database");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())
app.use("/", NoteRoute)
app.use("/", UserRoute)

app.listen(process.env.PORT, (result) => {
  console.log(`Server running in port ${process.env.PORT}`);
});
 