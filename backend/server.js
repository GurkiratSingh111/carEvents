const express = require('express');
const backEndPort = 5000;
const app = express();
app.get('/',(req,res)=>{
    res.send('API is running...');
});
app.listen(backEndPort,()=>{console.log('Server is running')});