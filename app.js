const express=require('express'),
app=express(),
bodyParser=require('body-parser'),
morgan = require ("morgan"),
mongoose = require ("mongoose"),
cors = require("cors"),
path = require ("path");


const port=process.env.PORT||8080;

//middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'dist')));


app.get('*',(req,res)=>{
 res.sendFile(path.join(__dirname,'dist/index.html'))
});


app.listen(port,(req,res)=>{
 console.log("conectado al puerto "+port);
});