
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const {connect} = require ('./database/connection') ;

require('dotenv').config({path:"./config.env"})
const PORT = process.env.PORT||4000;

connect();

const app = express();
app.use(express.json());

//routes
app.use('/api',require('./router/router'))

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:4000`)
})