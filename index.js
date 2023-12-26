require('dotenv').config()
const express = require ('express')
const app = express()
const port = 4000;

app.get('/',(req, res)=>{
    res.send('Hello World');
})
app.get ('/twitter',(req,res)=>{
    res.send('mrsshubham.singh@gmail.com');
})
app.get('/login',(req,res)=>{
    res.send('login to rockstar');
})
app.listen(process.env.PORT,()=>{
    console.log('listen the port 4000');
})