const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
   if(req.url==='/'){
       res.end("HEllo................")
   }
   else if(req.url==='/add-data'){
       fs.readFile('text.txt','utf-8',(err,data)=>{
       if(err){
           console.log(err)
       }
       else{
           res.end(data)
       }
       })
   }
   else{
       res.end("404 page not found")
    }
})

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})