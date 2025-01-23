const express =require("express");
const cors =require("cors");

const app = express();  // create express app
app.use(express.json()); // for parsing application/json
app.use(cors({origin:true}));

app.post("/authenticate",async(req,res)=>{
    const {username}=req.body;
    return res.json({username:username,secret:"This is a secret message"});
})

app.listen(3001);