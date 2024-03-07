const express = require("express")
const app =express()
const port =80;
const path =require("path")

app.get("/",(req,res)=>{
res.sendfile(path.join(__dirname,"template/index.html"))
})

app.listen(port,()=>{
    console.log(`server http://localhost:${80}`)
})