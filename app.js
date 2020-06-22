const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();




//Middlewares
app.use(cors);
app.use(express.json());

mongoose.connect('process.env.DATABASE_URL', 
    { useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true});



app.listen(port, ()=>{

    console.log(`Server is listening on http://localhost:${port}`);
});





