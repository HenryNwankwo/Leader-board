const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;




//Middlewares
app.use(cors);
app.use(express.json());


app.listen(`Server is listening on localhost:\\${port}`);





