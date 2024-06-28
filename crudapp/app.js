const express = require('express');

const app = express();

let dataSet = [
  {"id":1, "name":"aadhithya"},
  {"id":2, "name":"suriya"},
  {"id":3, "name":"gokul"},
  {"id":4, "name":"rohit"},
  {"id":5, "name":"sankar"},
  {"id":6, "name":"vignesh"},
  {"id":7, "name":"keerthi"}
];

app.get("/data", (req, res)=>{
  let result=dataSet;
  res.json(result);
});

app.listen(3000);