const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const path = require('path');


app.listen(port , ()=>{
    console.log(`Server Connected on port ${port}`)
})
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname , 'public')))
app.use("/openai" , require("./routes/openaiRoutes"))
