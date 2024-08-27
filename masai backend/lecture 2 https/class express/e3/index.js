const express=require('express');
const fs=require('fs');
const app=express();

app.use(express.json());

app.post('/signup',(req,res)=>{
    let email=req.body.email
    let data = fs.readFileSync('./db.json', 'utf8');
    let obj = JSON.parse(data);
    console.log(obj);
    let already=false
    obj.users.forEach(element => {
        if(element.email==email){
            already=true
            res.send("email already exists")
        }
    });
    if(!already){
        obj.users.push(req.body)
        fs.writeFileSync('./db.json', JSON.stringify(obj));
        res.send("You added successfully")
    }
    
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})