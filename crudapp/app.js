const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

let data=[];

app.post('/submit', (req, res) => {
  const { id, name } = req.body;
  const newData={id, name};
  data.push(newData);
  res.send(JSON.stringify(newData));
});

app.get('/data', (req, res)=>{
  res.json(data);
});

app.put('/update', (req, res)=>{

});

app.delete('/delete', (req, res)=>{

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});