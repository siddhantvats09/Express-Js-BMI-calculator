const express = require("express")
const bodyParser= require("body-parser")
const app =express()

app.use(bodyParser.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/",(req,res)=>{
    let n1=Number(req.body.height)
    let n2=Number(req.body.weight)
    let sum=n2 / (n1*n1);
    res.send(" Sum of two numbers is :"+ sum)
})
app.listen(3000,"127.0.0.1",(req,res)=>{
        console.log("it is server running on 3000");
        
});