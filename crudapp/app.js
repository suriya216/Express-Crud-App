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

app.put('/update/:id', (req, res)=>{
  const {id} = req.params;
  const updateId=Number(req.query.id);
  const newName=req.query.name;
  if(Number(id)===updateId){
    const index=data.findIndex(data=>data.id===updateId);
    if(index!=-1){
      data[index].name=newName||data[index].name;
      res.send("Data updated");
    }else{
      res.send("Data not found");
    }
  }else{
    res.send("Invalid request");
  }
});

app.delete('/delete', (req, res)=>{
  const {id} = req.params;
  const deleteId=Number(req.query.id);
  const newName=req.query.name;
  if(Number(id)===updateId){
    const index=data.findIndex(data=>data.id===deleteId);
    if(index!=-1){
      res.send("Data deleted");
    }else{
      res.send("Data not found");
    }
  }else{
    res.send("Invalid request");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});