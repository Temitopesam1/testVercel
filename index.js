const express = require('express');
// const bodyparser = require('bodyparser');

const app = express();
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.status(200).json({message: "Welcome"});
});

app.listen(3100, () =>{
    console.log("listening");
})