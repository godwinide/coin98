const express = require("express");
const dotenv = require("dotenv");
const expressLayout = require("express-ejs-layouts");

dotenv.config();
const app = express();


app.use(express.static('./public'));
app.set("view engine", "ejs");
app.use(expressLayout);

app.use("/competition", (req, res) => {
    return res.render("competition");
});

app.use("/", (req,res) => {
    return res.render("index");
});


const PORT = process.env.PORT || 4343;

app.listen(PORT, ()=> console.log(`server started on PORT ${PORT}`));

