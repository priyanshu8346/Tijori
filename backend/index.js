const connectToMongo = require('./db');
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
connectToMongo();

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// this middleware used here to read json data of req.body 
app.use(express.json());
app.use(cors());

app.use('/auth',require("./routes/auth"));
app.use('/notes',require("./routes/notes"));
app.use('/email', require("./routes/email"))

app.listen(port, () => {
  console.log(`CloudNotebook listening on port ${port}`)
})
