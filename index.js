const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config.js');

//Routes middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

//Routes 
app.get('/',(req, res)=>{
    res.send('Homepage!!');
})
 
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, ()=> console.log('Connected to Mongo!!!'));

// Listening to the server
app.listen(3000);
