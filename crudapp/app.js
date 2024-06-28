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
  res.send(data);
});


app.get('/delete/:id', (req, res)=>{
  const id=req.params.id;
  data=data.filter(d => d.id !== id);
  res.send(data);
});

app.get('/update/:id', (req, res)=>{
  const id=req.params.id;
  const newName="karthi";
  const index=data.findIndex(d=>d.id===id);
  if(index!=-1){
    data[index].name=newName;
    res.send(data);
  }else{
    res.send("Invalid id");
  }
});

app.get('/search/:id', (req, res)=>{
  const id=req.params.id;
  let result=data.filter(d => d.id == id);
  res.send(result);
})

app.get('/data', (req, res)=>{
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});