const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const backEndPort = process.env.BACK_END_PORT || 5000;


app.get('/',(req,res)=>{
    res.send('API is running...');
});
app.listen(backEndPort,()=>{console.log('Server is running')});