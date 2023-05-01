const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, res)=>{
    res.send('server running....')
})

app.listen(5000, ()=>{
    console.log(`server running on: ${port}`);
})