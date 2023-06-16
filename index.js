const express = require('express');
const router = require('./test');

const app = express();
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.status(200).json({message: "Welcome"});
});
app.use(router);

app.listen(3100, () =>{
    console.log("listening");
})