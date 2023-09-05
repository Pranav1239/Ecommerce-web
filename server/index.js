const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose
  .connect("mongodb://127.0.0.1:27017/MyShoeContact", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("Connected To MongoDB"))

  .catch((err) => {
    console.error(err);
  });

const contact = new mongoose.Schema({
    name : String,
    mail : String,
    subject : String
})

const Usercontact = mongoose.model('Usercontact' , contact)

const server = express();

server.use(cors());
server.use(bodyParser.json());

server.get('/' , (req , res)=>{
    res.send("<h1>Hello Ur on the backend prort</h1>")
})

server.post('/user' , async (req , res)=>{
    let user = new Usercontact();
    user.name = req.body.name;
    user.mail = req.body.mail;
    user.subject = req.body.subject;
    const doc = await user.save();
    console.log(doc)
    res.json(doc)
})  

server.listen(4000 , ()=>{
    console.log("This server is running on port of 4000");
})