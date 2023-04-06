const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors');


const app = express()

app.use(cors());
app.use(require("./routes/index"))


const mongoUrl = `mongodb+srv://admin:admin@cluster0.jnfm9jl.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl, (err) => {
    if (err) throw err;
    
    console.log(`MongoDB running at port given url`);
})

const serverPort = process.env.PORT || 8000;
app.listen(serverPort, (err) => {
    if (err) throw err;
    
    console.log(`Server running at port ${serverPort}`);
})
