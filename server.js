const express = require("express");
const app = express();


app.get('/api/get',(rew,res)=>{
    res.send({message:"hello back to node js"})
})


app.listen(8000,()=>{
    console.log("listening to 8000");
})