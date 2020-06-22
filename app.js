const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();






mongoose.connect('process.env.DATABASE_URL', { useUnifiedTopology: true, useNewUrlParser: true}, ()=>{
    console.log('CONNECTED TO DATABASE');
});

    //Middlewares
    app.use(cors);
    app.use(express.json());



app.listen(port, ()=>{

    console.log(`Server is listening on http://localhost:${port}`);
});





