const express = require("express")
const app= express();
const  AuthModel= require("./AuthModel")
const mongoose= require("mongoose");
const cors= require("cors")
app.use(express.json())
app.use(cors())
// import Model
const UserModel = require("./model")
// for connecting the PORT
const PORT= 4000;


//Api for Signup function
app.post("/signup",async(req,res)=>{
    const userDetails= await AuthModel(req.body)

    try{
        const userExist=await AuthModel.findOne({
            email:req.body.email
        })
        //Asume email already exist_
        if(userExist){
            res.json("Email Already Exist")
        }else{
     //for new user
    userDetails.save();
    res.json("User Created Successfully")
        }
    }
    catch{
        console.log("Api failed")
    }
})
// API For Login
app.post("/login",async(req,res)=>{
    try{
        const LoginUser= await AuthModel.findOne({
            email:req.body.email,
            password:req.body.password
        })
        //assume condition true/ credentials matched
        if(LoginUser){
         res.json({message:"Login Successfully",LoginUser:LoginUser})
        }else{
            res.json("userName or password is invalid")
        }
    }
    catch{}
})








// for creating the API
app.post("/create",  (req ,res)=>{
 const data= UserModel(req.body);
 data.save().then((user)=>{
    res.status(200).send(user)
 }).catch((err)=>{
    res.status(500).send(err.message);
 })    
})
//for getting the data from database
app.get("/show",async(req,res)=>{
    try{
   const data = await UserModel.find();
   res.status(200).send(data)
    }
    catch{
        res.status(500).send("Api Failed To fetch")

    }
})

//for getting selected id
app.get("/get/:id",(req,res)=>{
    const id = req.params.id;

    UserModel.findById(id,(err,user)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(user)

        }
    })
})
//for deleting the Api

app.delete("/delete/:id",(req,res)=>{
    const id= req.params.id;
    UserModel.findByIdAndRemove(id,(err,user)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send("Deleted Succesffuly")

        }
    })
})
// for updating the Api

app.put("/get/:id",(req,res)=>{
    const id=req.params.id
    UserModel.findById(id,(err,user)=>{
        if (err){
            console.log("api failed")
        }else{
            user.name=req.body.name;
            user.workout=req.body.workout;
            user.place=req.body.place;
            user.date=req.body.date;
            user.time=req.body.time;
            user.save().then((user)=>{
                res.status(200).send(user)
             }).catch((err)=>{
                res.status(500).send(err.message);
             })   
        }
    })
})

// for connecting the DATABASE
mongoose.connect("mongodb://127.0.0.1:27017/FitnessTracker ",{useNewUrlParser:true})
// for checking database connection
mongoose.connection.once("open",()=>{
    console.log("Database Connected Succesfully")
});
app.listen(PORT,()=>{
    console.log("PORT is connected at "+ PORT)
});