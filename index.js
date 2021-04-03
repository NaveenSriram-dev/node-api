const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config.js');

//Routes middleware
const route1 = require('./routes/route1');
app.use('/posts', route1);

//Routes 
app.get('/',(req, res)=>{
    res.send('Homepage!!');
})

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, ()=> console.log('Connected to Mongo!!!'));

// Listening to the server
app.listen(3000);
